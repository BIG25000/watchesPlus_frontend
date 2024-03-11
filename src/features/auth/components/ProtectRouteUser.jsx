import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function ProtectRouteUser({ children }) {
  const { authUser } = useAuth();

  return authUser?.role === "USER" ? children : <Navigate to="/login" />;
}
