import React from "react";
import Wallet from "../../features/wallet/components/Wallet";

export default function WalletPage() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="bg-gray-100 w-[1200px]">
          <Wallet />
        </div>
      </div>
    </>
  );
}
