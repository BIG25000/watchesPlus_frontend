import React from "react";
import * as walletAPI from "../../../apis/wallet";
import { useState } from "react";
import Input from "../../../components/Input";
import { WalletIcon } from "lucide-react";
import Button from "../../../components/Button";
import useWallet from "../../../hooks/useWallet";
import { toast } from "react-toastify";
import validateAmount from "../validations/validate-amount";

export default function Withdraw() {
  const [amount, setAmount] = useState("");

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
    setAmount("");
    document.getElementById("my_modal_1").close();
  };

  const hdlClick = () => {
    const validateErr = validateAmount({ amount });
    if (validateErr) {
      return toast.error(validateErr.amount);
    }
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="bg-black text-white p-4 rounded-lg flex flex-col gap-4">
      <span className="text-2xl font-bold flex justify-between items-baseline">
        Withdraw
        <small className="text-xs font-light">Fee 30 THB</small>
      </span>
      <form onSubmit={hdlSubmit} className="flex flex-col gap-4">
        <Input
          onChange={hdlChange}
          placeholder="amount"
          type="text"
          value={amount}
          inputMode="numeric"
          pattern="[1-9][0-9]*"
          min={0}
          max={200000}
        >
          <WalletIcon />
        </Input>
        {amount < 100 ? "" : <span>You will receive {amount - 30}</span>}
        <Button type="button" bg="green" className="btn" onClick={hdlClick}>
          Withdraw
        </Button>
        <dialog id="my_modal_1" className="modal text-black">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Confirm withdraw</h3>
            <p className="py-4">Amount : {amount}</p>
            <small className="text-xs font-light">
              You will receive {amount - 30} THB
            </small>
            <div className="modal-action">
              <button type="button" className="btn" onClick={hdlSubmit}>
                Confirm
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </form>
    </div>
  );
}
