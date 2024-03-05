
import React, { useState } from "react";

export default function WishlistItem({ id, brand, model, onDelete }) {
  const [isFavorite, setIsFavorite] = useState(true);
  const [buttonSize, setButtonSize] = useState("3rem");

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onDelete(id); // เรียกใช้ onDelete โดยส่ง id ของรายการที่ถูกลบไป
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl relative">
      <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
        className="relative"
      />
      <button
        className="absolute top-0 right-3"
        onClick={toggleFavorite}
        style={{
          color: isFavorite ? "rgba(255, 0, 0, 0.5)" : "inherit",
          fontSize: buttonSize,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        ♥︎
      </button>
      <div className="card-body">
        <h2 className="card-title">Model: {model}</h2>
        <p>Brand: {brand}</p>
      </div>
    </div>
  );
}