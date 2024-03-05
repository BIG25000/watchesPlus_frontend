import { useContext } from "react";
import { WalletContext } from "../features/wallet/contexts/WalletContext";

export default function useWallet() {
  return useContext(WalletContext);
}
