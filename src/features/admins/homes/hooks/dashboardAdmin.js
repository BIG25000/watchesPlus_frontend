import { useContext } from "react";
import { DashboradAdminContext } from "../contexts/DashboradAdminContext";

function dashboardAdmin() {
  return useContext(DashboradAdminContext);
}

export default dashboardAdmin;
