import { useState, createContext } from "react";
import { toast } from "react-toastify";

import * as authAPI from "../../../apis/auth";
import { setToken, removeToken, getToken } from "../../../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const register = async (user) => {
    try {
      const res = await authAPI.register(user);
      setAuthUser(res.data.user);
      setToken(res.data.accessToken);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  const login = async (input) => {
    try {
      const res = await authAPI.login(input);
      setAuthUser(res.data.user);
      setToken(res.data.accessToken);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const changePassword = async (user) => {
    try {
      const res = await authAPI.changePassword(user);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.response);
      toast.error(error.message);
    }
  };
  const logout = async () => {
    try {
      removeToken();
      toast.success("logout");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //
  const fetchAuthUser = async () => {
    const res = await authAPI.getMe();
    setAuthUser(res.data);
  };

  useEffect(() => {
    fetchAuthUser();
  }, []);
  //

  return (
    <AuthContext.Provider
      value={{ authUser, register, login, changePassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
