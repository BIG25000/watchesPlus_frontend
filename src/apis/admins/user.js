import myAPI from "../../config/myAPI";

export const getAllUser = () => myAPI.get("/auth");

export const updateStatusUser = (id) => myAPI.delete(`/auth/${id}`);

export const updateStatusUser2 = (id) => myAPI.patch(`/auth/${id}`);
