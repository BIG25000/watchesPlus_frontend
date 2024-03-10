import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import * as shippingApi from "../../../../apis/admins/shipping";
import { useState } from "react";
import { toast } from "react-toastify";

export const ShippingAdminContext = createContext();

function ShippingAdminContextProvider({ children }) {
  const [shippings, setShippings] = useState([]);

  useEffect(() => {
    shippingApi
      .getAllShipping()
      .then((res) => setShippings(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const updateTracking = async (trackingNumber, id) => {
    try {
      const res = await shippingApi.updateTrackingAdmin(trackingNumber, id);
      // console.log("res.data.data", res.data.data);
      // const updateTrack = shippings.map((el) => el.id == res.data.data)
      console.log(res, "res");

      setShippings((el) =>
        el.map((el1) => (el1.id == res.data.data.id ? res.data.data : el1))
      );

      toast.success("create tracking success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShippingAdminContext.Provider value={{ shippings, updateTracking }}>
      {children}
    </ShippingAdminContext.Provider>
  );
}

export default ShippingAdminContextProvider;
