import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function ProtectRouteAdmin({ children }) {
  const { authUser } = useAuth();

  if (authUser?.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return authUser ? children : <Navigate to="/login" />;
}
