import React from "react";
import useWallet from "../../../hooks/useWallet";

export default function WalletTransactionItem({ el }) {
  const {
    wallet: { id },
  } = useWallet();
  return (
    <li className="p-4 border border-b-0 flex ">
      <div className="flex-1">{el.createdAt.split("T")[0]}</div>
      <div
        className={`flex-1 ${
          el.type === "DEPOSIT" ||
          (el.type === "REFUNDED" && el.toWalletId === id) ||
          (el.type === "TRANSFER" && el.toWalletId === id)
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {el.price}
      </div>
      <div className="flex-1">{el.type}</div>
      {el.type === "DEPOSIT" || el.type === "WITHDRAW" ? (
        <div>Credit card</div>
      ) : (
        <div>Wallet</div>
      )}
    </li>
  );
}
