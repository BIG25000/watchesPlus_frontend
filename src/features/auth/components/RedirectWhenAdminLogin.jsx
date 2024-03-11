import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function RedirectWhenAdminLogin({ children }) {
  const { authUser } = useAuth();

  return authUser?.role === "ADMIN" ? <Navigate to="/admin" /> : children;
}
