import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";

import * as authAPI from "../../../apis/auth";
import { setToken, removeToken, getToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

const promise = wrapPromise(
  getToken() ? authAPI.getMe() : Promise.resolve(null)
);

export default function AuthContextProvider({ children }) {
  const res = promise.read();
  const [authUser, setAuthUser] = useState(res?.data?.user);

  const register = async (user) => {
    try {
      const res = await authAPI.register(user);
      setAuthUser(res.data.user);
      setToken(res.data.accessToken);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const login = async (input) => {
    try {
      const res = await authAPI.login(input);

      if (res.data.user.status === "INACTIVE") {
        return toast.error("YOU HAS BEEN BLOCKED");
      }

      setAuthUser(res.data.user);
      setToken(res.data.accessToken);
      toast.success(res.data.message);
      return res.data.user.role;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const changePassword = async (user) => {
    try {
      const res = await authAPI.changePassword(user);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const logout = async () => {
    try {
      removeToken();
      setAuthUser(null);
      toast.success("Logout");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //
  const fetchAuthUser = async () => {
    const res = await authAPI.getMe();
    setAuthUser(res.data.user);
    // console.log(res.data);
  };

  //

  return (
    <AuthContext.Provider
      value={{
        authUser,
        register,
        login,
        changePassword,
        logout,
        fetchAuthUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function wrapPromise(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );
  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
}
