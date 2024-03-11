import myAPI from "../../config/myAPI";

export const getAllShipping = () => myAPI.get("/shipping");

export const updateTrackingAdmin = (data, id) =>
  myAPI.patch(`/shipping/admin/${id}`, data);
