import React, { useState } from "react";
import WishlistItem from "./WishlistItem";

export default function WishlistList() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [models, setModels] = useState([
    {
      id: "1",
      brand: "Rolex",
      name: "RL001"
    },
    {
      id: "2",
      brand: "Rolex",
      name: "RL002"
    },
    {
      id: "3",
      brand: "Omega",
      name: "OM001"
    },
    {
      id: "4",
      brand: "Omega",
      name: "OM002"
    },
    {
      id: "5",
      brand: "Seiko",
      name: "SK001"
    },
    {
      id: "6",
      brand: "Seiko",
      name: "SK002"
    },
    {
      id: "7",
      brand: "Catier",
      name: "CT001"
    },
    {
      id: "8",
      brand: "Catier",
      name: "CT002"
    },
    {
      id: "9",
      brand: "Hublot",
      name: "HL001"
    },
    {
      id: "10",
      brand: "Hublot",
      name: "HL002"
    },
    {
      id: "11",
      brand: "Casio",
      name: "CS001"
    },
    {
      id: "12",
      brand: "Casio",
      name: "CS002"
    },
  ]);

  const brands = [
    {
      id: "1",
      name: "Rolex",
    },
    {
      id: "2",
      name: "Omega",
    },
    {
      id: "3",
      name: "Seiko",
    },
    {
      id: "4",
      name: "Catier",
    },
    {
      id: "5",
      name: "Hublot",
    },
    {
      id: "6",
      name: "Casio",
    },
  ];

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleDeleteItem = (id) => {
    setModels((prevModels) =>
      prevModels.filter((model) => model.id !== id)
    );
  };

  return (
    <>
      <h1>WISHLIST</h1>
      <div>
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Choose your brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {!selectedBrand ? (
          models.map((model) => (
            <WishlistItem
              key={`${model.brand}-${model.name}`}
              id={model.id}
              brand={model.brand}
              model={model.name}
              onDelete={handleDeleteItem}
            />
          ))
        ) : (
          models
            .filter((model) => model.brand === selectedBrand)
            .map((model) => (
              <WishlistItem
                key={`${model.brand}-${model.name}`}
                id={model.id}
                brand={model.brand}
                model={model.name}
                onDelete={handleDeleteItem}
              />
            ))
        )}
      </div>
    </>
  );
}


