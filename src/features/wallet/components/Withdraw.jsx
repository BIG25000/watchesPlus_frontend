import React from "react";
import * as walletAPI from "../../../apis/wallet";
import { useState } from "react";
import Input from "../../../components/Input";
import { WalletIcon } from "lucide-react";
import Button from "../../../components/Button";

export default function Withdraw() {
  const [amount, setAmount] = useState(0);

  const hdlChange = (e) => {
    setAmount(e.target.value);
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    await walletAPI.withdraw({ amount });
  };
  return (
    <div className="bg-brown text-white p-4 rounded-lg flex flex-col gap-4">
      <span className="text-2xl font-bold flex justify-between items-baseline">
        Withdraw
        <small className="text-xs font-light">Fee 30 THB</small>
      </span>
      <form onSubmit={hdlSubmit} className="flex flex-col gap-4">
        <Input onChange={hdlChange} placeholder="amount" type="number">
          <WalletIcon />
        </Input>
        <Button type="submit" bg="green">
          Withdraw
        </Button>
      </form>
    </div>
  );
}
