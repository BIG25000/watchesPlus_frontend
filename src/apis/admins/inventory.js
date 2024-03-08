import myAPI from "../../config/myAPI";

export const getAllInventory = () => myAPI.get("/inventory/all");

export const verifyInventory = (id) => myAPI.patch(`inventory/admin/${id}`);

export const failedInventory = (id) => myAPI.delete(`inventory/admin/${id}`);
