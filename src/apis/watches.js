import myAPI from "../config/myAPI";

export const allWatches = () => myAPI.get("/watch")
export const searchWatches = (querySearch) => myAPI.get(`/watch/search${querySearch}`)