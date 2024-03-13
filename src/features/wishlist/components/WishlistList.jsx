import React from "react";
import CardProduct from "../../product/components/CardProduct";
import { useWishlist } from "../context/WishlistContext";
import useSearch from "../../../hooks/useSearch";
import SelectionForm from "../../product/components/SelectionForm";
import IconNoHover from "../../../components/IconNoHover";
import Icon from "../../../components/Icon";
import Title from "../../../components/Title";
import wishlistSign from "../../../assets/wishlist-removebg-preview.png"

export default function WishlistList() {
  const { wishlist } = useWishlist();
  console.log(wishlist);
  const { showSearch, querySearch, brands, selectBrand, handleSelectBrand } =
    useSearch();

  return (
    <div className=" mx-auto w-[1200px] min-h-screen bg-white pt-4 px-8">
      <div className="flex justify-center">
          <img className="w-72" src={wishlistSign} />
        </div>
      <div className="flex gap-4 justify-end">
        <SelectionForm items={brands} onClick={handleSelectBrand} />
      </div>
      <br />
      <div className="flex flex-wrap gap-4">
        {wishlist.length > 0 ? (
          selectBrand !== null && selectBrand !== "All brand" ? (
            wishlist.filter((el) => el.watch.brand.name === selectBrand)
              .length == 0 ? (
              <div className="w-full flex flex-col justify-center items-center">
                <IconNoHover name="FileSearch" size="100" />
                <div>No item in your wishlist</div>
              </div>
            ) : (
              wishlist
                .filter((el) => el.watch.brand.name === selectBrand)
                .map((el) => {
                  return <CardProduct data={el.watch} key={el.id} id={el.id} />;
                })
            )
          ) : (
            wishlist.map((el) => (
              <CardProduct data={el.watch} id={el.id} key={el.id} />
            ))
          )
        ) : (
          <div className="w-full h-screen flex flex-col justify-center items-center my-8 gap-4">
            <Icon name="FileSearch" size="100" />
            <Title>No Wishlist Lists</Title>
          </div>
        )}
      </div>
    </div>
  );
}
