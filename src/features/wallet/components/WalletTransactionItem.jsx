import React from "react";
import useWallet from "../../../hooks/useWallet";
import { formatNum } from "../../../utils/formatNumber";

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
        {formatNum(el.price)}
      </div>
      <div className="flex-1">{el.type}</div>
      {el.type === "DEPOSIT" || el.type === "WITHDRAW" ? (
        <div className="w-24 text-end">Credit card</div>
      ) : (
        <div className="w-24 text-end">Wallet</div>
      )}
    </li>
  );
}
