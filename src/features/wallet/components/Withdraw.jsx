import React from "react";
import * as walletAPI from "../../../apis/wallet";
import { useState } from "react";
import Input from "../../../components/Input";
import { WalletIcon } from "lucide-react";
import Button from "../../../components/Button";
import useWallet from "../../../hooks/useWallet";
import { toast } from "react-toastify";

export default function Withdraw() {
  const [amount, setAmount] = useState(0);

  const { getWallet, getWalletTransaction } = useWallet();

  const hdlChange = (e) => {
    setAmount(e.target.value);
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    const res = await walletAPI.withdraw({ amount });
    toast.success(res.data.message);
    getWallet();
    getWalletTransaction();
  };
  return (
    <div className="bg-black text-white p-4 rounded-lg flex flex-col gap-4">
      <span className="text-2xl font-bold flex justify-between items-baseline">
        Withdraw
        <small className="text-xs font-light">Fee 30 THB</small>
      </span>
      <form onSubmit={hdlSubmit} className="flex flex-col gap-4">
        <Input onChange={hdlChange} placeholder="amount" type="number">
          <WalletIcon />
        </Input>
        <span>You will receive {amount - 30}</span>
        <Button type="submit" bg="green">
          Withdraw
        </Button>
      </form>
    </div>
  );
}
