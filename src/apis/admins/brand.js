import myAPI from "../../config/myAPI";

export const createBrand = (body) => myAPI.post("/brand", body);

export const getAllBrand = () => myAPI.get(`/brand`);

export const editBrand = (data, id) => myAPI.patch(`/brand/${id}`, data);

export const deleteBrand = (id) => myAPI.delete(`brand/${id}`);
