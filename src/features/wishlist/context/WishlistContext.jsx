import React, { createContext, useState, useContext, useEffect } from "react";
import { getWishlist } from "../../../apis/wishlist";

import { allWatches } from "../../../apis/watches";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export default function WishlistContextProvider ({ children })  {
  const [wishlist, setWishlist] = useState([]);

  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetchWishlist();
    }, []);
  
  const fetchWishlist = async () => {
      try {
          const response = await getWishlist();
          setWishlist(response.wishlist);
        } catch (error) {
            console.error("Error fetching wishlist:", error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await allWatches()
            setProducts(response.data)
        } catch (error) {
            console.error("Error fetching allwatches", error)
        }
    }
    


  return (
    <WishlistContext.Provider value={{ wishlist, fetchWishlist, products, fetchData }}>
      {children}
    </WishlistContext.Provider>
  );
};