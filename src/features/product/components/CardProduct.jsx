import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myAPI from "../../../config/myAPI";
import useAuth from "../../../hooks/useAuth";
import useSearch from "../../../hooks/useSearch";
import { toast } from "react-toastify";
import { useWishlist } from "../../wishlist/context/WishlistContext";

export default function CardProduct({ data, id }) {
  const { authUser } = useAuth();
  const { fetchData } = useSearch();
  const { fetchWishlist } = useWishlist();
  const navigate = useNavigate();

  const wishlistArray = data.wishlist;
  let findWishlist = [];
  if (wishlistArray) {
    findWishlist = wishlistArray.findIndex((el) => el.userId == authUser.id);
  }

  const handleClickLike = async (e) => {
    e.stopPropagation();

    if (id != undefined || findWishlist >= 0) {
      await myAPI.delete(`/wishlist/${data.id}`);
      fetchData();
      fetchWishlist();
      toast.success("Deleted from wishlist");
    } else {
      await myAPI.post(`/wishlist/${data.id}`);
      // หลังจากสำเร็จในการเพิ่มลงใน Wishlist ก็ตั้งค่า isLike เป็น true
      fetchData();
      fetchWishlist();
      toast.success("Added to wishlist");
    }
  };

  return (
    <div className="w-72 h-96 flex flex-col bg-black shadow cursor-pointer">
      <div
        className="relative h-60 bg-egg flex justify-center items-center"
        onClick={() => navigate("/watch/:watchId")}
      >
        <img className="h-full" src={data?.watchImage} />
        <div
          className="absolute right-2 top-2 "
          onClick={handleClickLike}
          role="button"
        >
          {id != undefined || findWishlist >= 0 ? (
            <Heart color="#ff0000" fill="red" />
          ) : (
            <Heart color="#ff0000" />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-40 p-4 text-white">
        <div className="font-mono">{data?.brand.name}</div>
        <div className="flex flex-col gap-1">
          <div className="flex text-2xl font-semibold">{data?.modelName}</div>
          <div className="font-mono text-gray-500 text-xs">
            {data?.description}
          </div>
        </div>
      </div>
    </div>
  );
}
