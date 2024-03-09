import { useContext } from "react";
import { ShippingAdminContext } from "../contexts/ShippingAdminContext";

function shippingAdmin() {
  return useContext(ShippingAdminContext);
}

export default shippingAdmin;
