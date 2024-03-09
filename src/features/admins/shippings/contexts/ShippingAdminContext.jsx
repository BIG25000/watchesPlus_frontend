import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import * as shippingApi from "../../../../apis/admins/shipping";
import { useState } from "react";

export const ShippingAdminContext = createContext();

function ShippingAdminContextProvider({ children }) {
  const [shippings, setShippings] = useState([]);

  useEffect(() => {
    shippingApi
      .getAllShipping()
      .then((res) => setShippings(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ShippingAdminContext.Provider value={{ shippings }}>
      {children}
    </ShippingAdminContext.Provider>
  );
}

export default ShippingAdminContextProvider;
