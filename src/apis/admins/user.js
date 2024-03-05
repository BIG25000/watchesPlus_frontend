import myAPI from "../../config/myAPI";

export const getAllUser = () => myAPI.get("/auth");
