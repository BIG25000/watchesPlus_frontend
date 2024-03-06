import myAPI from "../config/myAPI";

export const allWatches = () => myAPI.get("/watch")

export const getWatchById = (watchId) => myAPI.get(`/watch/${watchId}`)