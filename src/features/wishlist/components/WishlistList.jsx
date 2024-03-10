import React from "react";
import CardProduct from "../../product/components/CardProduct";
import { useWishlist } from "../context/WishlistContext";
import useSearch from "../../../hooks/useSearch";
import SelectionForm from "../../product/components/SelectionForm";
import Icon from "../../../components/Icon";

export default function WishlistList() {
  const { wishlist } = useWishlist();
  console.log(wishlist)
  const {
    showSearch,
    querySearch,
    brands,
    selectBrand,
    handleSelectBrand,
  } = useSearch();

  return (
    <div className=" mx-auto w-[1200px] min-h-56 mt-4 mb-8">
      <div className="text-2xl font-bold mb-4">WatchesPlus - Wishlist</div>
      {showSearch || querySearch ? <p>Search keyword: '{showSearch}'</p> : ""}
      <div className="flex gap-4 justify-end">
        <SelectionForm items={brands} onClick={handleSelectBrand} />
      </div>
      <div className="flex flex-wrap gap-4">
        {wishlist.length > 0 ? (
          selectBrand !== null && selectBrand !== "All brand" ? (
            wishlist
              .filter((el) => el.watch.brand.name === selectBrand)
              .map((el) => {
                return <CardProduct data={el.watch} key={el.id} id={el.id} />;
              })
          ) : (
            wishlist.map((el) => (
              <CardProduct data={el.watch} id={el.id} key={el.id} />
            ))
          )
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <Icon name="FileSearch" size="100" />
            <div>No item in your wishlist</div>
          </div>
        )}
      </div>
    </div>
  );
}