import myAPI from "../config/myAPI";

export const allWatches = () => myAPI.get("/watch")
export const searchWatches = (querySearch) => myAPI.get(`/watch/search${querySearch}`)

export const getWatchById = (watchId) => myAPI.get(`/watch/${watchId}`)