import { useContext } from "react";
import { UserAdminContext } from "../contexts/UserAdminContext";

function userAdmin() {
  return useContext(UserAdminContext);
}

export default userAdmin;
