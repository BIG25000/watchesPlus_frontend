import { useContext } from "react";
import { BrandAdminContext } from "../contexts/BrandAdminContext";

function brandAdmin() {
  return useContext(BrandAdminContext);
}

export default brandAdmin;
