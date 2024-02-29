import { useState, createContext } from "react";
import { toast } from "react-toastify";

import * as authAPI from "../../../apis/auth";
import { setToken } from "../../../utils/local-storage";

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
      toast.error(error.message);
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
      toast.error(error.message);
    }
  };
  return (
    <AuthContext.Provider value={{ authUser, register, login, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
}
