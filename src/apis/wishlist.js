import myAPI from "../config/myAPI";

export const getWishlist = async () => {
  try {
    const response = await myAPI.get("/wishlist");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addWatch = () => myAPI.post("/wishlist/:watchId");

export const deleteWatch = () => myAPI.delete("/wishlist/:watchId");
