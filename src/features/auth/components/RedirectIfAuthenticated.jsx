import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();

  if (authUser?.role === "ADMIN") {
    return <Navigate to="/admin" />;
  }

  return authUser ? <Navigate to="/" /> : children;
}
