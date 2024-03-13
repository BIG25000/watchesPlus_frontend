import React from "react";
import TopUp from "./TopUp";
import Withdraw from "./Withdraw";
import { useEffect } from "react";
import useWallet from "../../../hooks/useWallet";
import WalletTransaction from "./WalletTransaction";
import { formatNum } from "../../../utils/formatNumber";

export default function Wallet() {
  const {
    getWallet,
    wallet: { amount },
  } = useWallet();

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 mt-10 items-center min-h-screen px-20">
      <div className="w-full rounded-xl py-8 px-16 flex flex-col gap-5  bg-white">
        <div className="w-full bg-egg rounded-xl p-6">
          <span className="text-2xl">Your wallet</span>
          <div>
            Amount :{" "}
            <span className="text-4xl text-black">{formatNum(amount)} THB</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-start gap-4">
          <TopUp />
          <Withdraw />
        </div>
      </div>

      <WalletTransaction />
    </div>
  );
}

{
  /* <div className="w-full flex flex-col gap-4 justify-center items-center h-[72.8vh]">
<div className="w-2/3 rounded-xl p-8 flex justify-around items-center">
  <div className="bg-egg w-2/5 rounded-xl p-6">
    <span className="text-2xl">Your wallet</span>
    <div>
      Amount :{" "}
      <span className="text-4xl text-black">{formatNum(amount)} THB</span>
    </div>
  </div>
  <div className="flex flex-col gap-4">
    <TopUp />
    <Withdraw />
  </div>
</div>
<WalletTransaction />
</div> */
}
