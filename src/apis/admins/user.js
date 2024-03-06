import myAPI from "../../config/myAPI";

export const getAllUser = () => myAPI.get("/auth");

export const updateStatusBlock = (id) => myAPI.delete(`/auth/${id}`);

export const updateStatusUnblock = (id) => myAPI.patch(`/auth/${id}`);
