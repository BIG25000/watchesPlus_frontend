import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";

import * as walletAPI from "../../../apis/wallet";

export const WalletContext = createContext();

export default function WalletContextProvider({ children }) {
  const [wallet, setWallet] = useState({});

  const getWallet = async () => {
    const res = await walletAPI.getWallet();
    setWallet(res.data);
  };

  return (
    <WalletContext.Provider value={{ wallet, getWallet }}>
      {children}
    </WalletContext.Provider>
  );
}
