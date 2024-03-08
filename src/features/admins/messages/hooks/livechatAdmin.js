import { useContext } from "react";
import { MessageAdminContext } from "../contexts/MessageAdminContext";

function livechatAdmin() {
  return useContext(MessageAdminContext);
}

export default livechatAdmin;
