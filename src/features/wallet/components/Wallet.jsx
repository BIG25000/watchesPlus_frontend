import React from "react";
import TopUp from "./TopUp";
import Withdraw from "./Withdraw";
import { useEffect } from "react";
import useWallet from "../../../hooks/useWallet";
import WalletTransaction from "./WalletTransaction";

export default function Wallet() {
  const {
    getWallet,
    wallet: { amount },
  } = useWallet();

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="w-2/3 rounded-xl p-8 flex justify-around items-center">
        <div className="bg-egg w-2/5 rounded-xl p-6">
          <span className="text-2xl">Your wallet</span>
          <div>
            Amount : <span className="text-4xl text-black">{amount} THB</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <TopUp />
          <Withdraw />
        </div>
      </div>
      <WalletTransaction />
    </div>
  );
}
