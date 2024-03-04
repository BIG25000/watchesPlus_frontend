import myAPI from "../../config/myAPI";

export const createBrand = (body) => myAPI.post("/brand", body);

export const getAllBrand = () => myAPI.get(`/brand`);

export const editBrand = (body, id) => myAPI.patch(`/brand/${id}`, body);

export const deleteBrand = (id) => myAPI.delete(`brand/${id}`);
