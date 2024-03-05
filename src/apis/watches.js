import myAPI from "../config/myAPI";

export const allWatches = () => myAPI.get("/watch")