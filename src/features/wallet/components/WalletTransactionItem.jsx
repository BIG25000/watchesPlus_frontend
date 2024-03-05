import React from "react";

export default function WalletTransactionItem({ el }) {
  return (
    <li className="p-4 border border-b-0 flex ">
      <div className="flex-1">{el.createdAt.split("T")[0]}</div>
      <div
        className={`flex-1 ${
          el.type === "DEPOSIT" ? "text-green-500" : "text-red-500"
        }`}
      >
        {el.price}
      </div>
      <div className="flex-1">{el.type}</div>
      <div>Omise</div>
    </li>
  );
}
