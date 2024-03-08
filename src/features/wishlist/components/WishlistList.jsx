import React from "react";
import CardProduct from "../../product/components/CardProduct";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistList() {
  const { wishlist, products } = useWishlist();
  // console.log("THIS IS WISHLIST",wishlist)

  return (
    <div className=" mx-auto w-[1200px] min-h-56 flex flex-wrap gap-4 mt-4 mb-8">
      {wishlist.map((el) => (
        <CardProduct data={el.watch} id={el.id}  key={el.id}/>
      ))}
    </div>
  );
}