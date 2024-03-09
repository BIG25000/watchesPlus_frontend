import { useContext } from "react";
import { InventoryAdminContext } from "../contexts/InventoryAdminContext";

function inventoryAdmin() {
  return useContext(InventoryAdminContext);
}

export default inventoryAdmin;
