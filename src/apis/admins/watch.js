import myAPI from "../../config/myAPI";

export const getAllWatch = () => myAPI.get("/watch");

export const createWatch = (data) => myAPI.post("/watch", data);

export const editWatch = (data, id) => myAPI.patch(`/watch/${id}`, data);

export const deleteWatch = (id) => myAPI.delete(`/watch/${id}`);
