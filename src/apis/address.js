import myAPI from "../config/myAPI";

export const addAddress = (body) => myAPI.post('/address',body)
export const updateAddress = (addressId,body) => myAPI.patch(`/address/update/${addressId}`,body)
export const cancelShipping = (body) => myAPI.patch('/address/cancel',body)
export const getAddressByInventoryId = (inventoryId) => myAPI.get(`/address/${inventoryId}`)