import React from "react";
import Wallet from "../features/wallet/components/Wallet";
import WalletContextProvider from "../features/wallet/contexts/WalletContext";

export default function WalletPage() {
  return (
    <>
      <WalletContextProvider>
        <Wallet />
      </WalletContextProvider>
    </>
  );
}
