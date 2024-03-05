import { useContext } from "react";
import { WatchAdminContext } from "../contexts/WatchAdminContext";

function watchAdmin() {
  return useContext(WatchAdminContext);
}

export default watchAdmin;
