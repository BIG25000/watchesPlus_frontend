import React, { useState } from "react";
import { useEffect } from "react";
import useWishlist from "../hooks/use-wishlist";
import * as wishlistApi from "../api/wishlist";
import WishlistList from "../features/service/WishlistList";

export default function WishListPage() {
  const { cards, setCards } = useWishlist();

  useEffect(() => {
    wishlistApi
      .getWishlist()
      .then((res) => setCards(res.data.wishlists))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>  
    <WishlistList/>
    </>
  )
}
