import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import * as inventoryApi from "../../../../apis/admins/inventory";
import { useState } from "react";
import { toast } from "react-toastify";

export const InventoryAdminContext = createContext();

function InventoryAdminContextProvider({ children }) {
  const [inventorys, setInventorys] = useState([]);

  useEffect(() => {
    inventoryApi
      .getAllInventory()
      .then((res) => setInventorys(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const verifyInventory = async (id) => {
    try {
      const res = await inventoryApi.verifyInventory(id);
      const newInven = inventorys.filter(
        (el) =>
          // el.id == res.data.data.id ? res.data.data : el เฟต ID แต่ใช้ MAP
          el.id == id ? false : el // filter ใช้ อันนี้
      );
      setInventorys(newInven);
      toast.success("verify success");
    } catch (error) {
      console.log(error);
    }
  };

  const failedInventory = async (id) => {
    try {
      const res = await inventoryApi.failedInventory(id);

      const newInven = inventorys.filter((el) => (el.id == id ? false : true));

      setInventorys(newInven);
      toast.success("verify failed success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InventoryAdminContext.Provider
      value={{ inventorys, verifyInventory, failedInventory }}
    >
      {children}
    </InventoryAdminContext.Provider>
  );
}

export default InventoryAdminContextProvider;
