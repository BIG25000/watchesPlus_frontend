import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myAPI from "../../../config/myAPI";
import useAuth from "../../../hooks/useAuth";
import useSearch from "../../../hooks/useSearch";
import { toast } from "react-toastify";
import { useWishlist } from "../../wishlist/context/WishlistContext";
import useProduct from "../../../hooks/useProduct";

export default function CardProduct(props) {
  const { data, id } = props
  const { authUser } = useAuth();
  const { fetchData } = useSearch();
  const { fetchWishlist } = useWishlist();
  const { fetchMostOrder } = useProduct()

  const navigate = useNavigate();

  const wishlistArray = data.wishlist;
  let findWishlist = [];
  if (wishlistArray) {
    findWishlist = wishlistArray.findIndex((el) => el.userId == authUser?.id);
  }

  const handleClickLike = async (e) => {
    e.stopPropagation();

    if (!authUser) {
      navigate("/login");
    }

    if (id != undefined || findWishlist >= 0) {
      await myAPI.delete(`/wishlist/${data.id}`);
      fetchData();
      fetchWishlist();
      fetchMostOrder()
      toast.success("Deleted from wishlist");
    } else {
      await myAPI.post(`/wishlist/${data.id}`);
      // หลังจากสำเร็จในการเพิ่มลงใน Wishlist ก็ตั้งค่า isLike เป็น true
      fetchData();
      fetchWishlist();
      fetchMostOrder()
      toast.success("Added to wishlist");
    }

  };

  return (
    <div
      className="w-72 h-96 flex flex-col rounded-md bg-gradient-to-b from-slate-500 to-slate-800 shadow cursor-pointer"
      onClick={() => navigate(`/watch/${data.id}`)}
    >
      <div className="relative h-60 bg-egg flex justify-center items-center">
        <img className="h-full w-full object-cover rounded-t-md" src={data?.watchImage} />
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
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 rounded-full" src={data?.brand.brandImage} />
          <div className="font-mono">{data?.brand.name}</div>
        </div>
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
