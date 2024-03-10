import myAPI from "../config/myAPI";

export const getProfileInfo = () => myAPI.get("/profile");

export const updateProfileInfo = (formData) =>
  myAPI.patch("/profile", formData);

export const getMyInventoryToSell = (watchId) => myAPI.get(`/inventory/${watchId}`)
export const getAllInMyInventory = () => myAPI.get(`/inventory`)

export const addWatchToInventory = (formData) => myAPI.post(`/inventory`,formData)