import { useState, createContext, useEffect } from "react";

import * as walletAPI from "../../../apis/wallet";

export const WalletContext = createContext();

export default function WalletContextProvider({ children }) {
  const [wallet, setWallet] = useState({});
  const [walletTransaction, setWalletTransaction] = useState([]);

  const getWallet = async () => {
    const res = await walletAPI.getWallet();
    setWallet(res.data);
  };

  const getWalletTransaction = async () => {
    const res = await walletAPI.getWalletTransaction();
    setWalletTransaction(res.data);
  };

  return (
    <WalletContext.Provider
      value={{ wallet, walletTransaction, getWallet, getWalletTransaction }}
    >
      {children}
    </WalletContext.Provider>
  );
}
