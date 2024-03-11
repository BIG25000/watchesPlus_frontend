import myAPI from "../config/myAPI";

export const getAllHistory = (watchId) => myAPI.get(`/transaction/${watchId}`)