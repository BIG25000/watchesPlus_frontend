import { useState, createContext } from "react";

import * as profileAPI from "../../../apis/profile";
import * as orderAPI from "../../../apis/order";
import * as addressAPI from "../../../apis/address";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileInfo, setProfileInfo] = useState({});
  const [orders, setOrders] = useState({});

  const getProfileInfo = async () => {
    const res = await profileAPI.getProfileInfo();
    setProfileInfo(res.data);
  };

  const updateProfileInfo = async (formData) => {
    const res = await profileAPI.updateProfileInfo(formData);
    setProfileInfo(res.data.profile);
    toast.success(res.data.message);
    return res;
  };

  const watchToSell = async (watchId) => {
    const { data } = await profileAPI.getMyInventoryToSell(watchId);
    return data;
  };

  const getMyInventory = async () => {
    const { data } = await profileAPI.getAllInMyInventory();
    return data;
  };

  //address context
  const createAddress = async (body) => {
    const res = await addressAPI.addAddress(body);
    toast.success(res.data.message)
    return res.data.data;
  };

  const cancelShippingBeforeAdmin = async (body)=>{
    const res = await addressAPI.cancelShipping(body)
    toast.success(res.data.message)
    return res.data.data
  }

  const getAddressFromInventoryId = async (inventoryId) => {
    const res = await addressAPI.getAddressByInventoryId(inventoryId)
    return res.data.data
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  const getAllOrder = async () => {
    const res = await orderAPI.getAllOrder();
    setOrders(res.data);
  };

  const handleClickCancelBuyOrder = async (orderId) => {
    const res = await orderAPI.cancelBuyOrder(orderId);
    toast.success(res.data.message);
    getAllOrder();
  };

  const handleClickCancelSaleOrder = async (orderId) => {
    const res = await orderAPI.cancelSaleOrder(orderId);
    toast.success(res.data.message);
    getAllOrder();
  };

  return (
    <ProfileContext.Provider
      value={{
        profileInfo,
        getProfileInfo,
        updateProfileInfo,
        orders,
        getAllOrder,
        handleClickCancelBuyOrder,
        handleClickCancelSaleOrder,
        watchToSell,
        getMyInventory,
        createAddress,
        cancelShippingBeforeAdmin,
        getAddressFromInventoryId
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
