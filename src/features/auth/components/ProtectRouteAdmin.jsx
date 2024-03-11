import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function ProtectRouteAdmin({ children }) {
  const { authUser } = useAuth();

  return authUser?.role === "ADMIN" ? children : <Navigate to="/" />;
}
