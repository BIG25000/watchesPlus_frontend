import React from "react";
import Script from "react-load-script";
import * as walletAPI from "../../../apis/wallet";
import { useState } from "react";
import Input from "../../../components/Input";
import { WalletIcon } from "lucide-react";
import Button from "../../../components/Button";
import useWallet from "../../../hooks/useWallet";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

let OmiseCard;

export default function TopUp() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState(0);

  const { getWallet, getWalletTransaction } = useWallet();

  const hdlChange = (e) => {
    setAmount(e.target.value * 100);
  };

  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: import.meta.env.VITE_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "WatchesPlus+",
      submitLabel: "Pay",
      buttonLabel: "Pay with Omise",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const hdlOmiseToken = () => {
    OmiseCard.open({
      amount,
      onCreateTokenSuccess: async (nonce) => {
        /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
        const response = await walletAPI.topUp({ token: nonce, amount });
        toast.success(response.data.message);
        getWallet();
        getWalletTransaction();
      },
      onFormClosed: () => {
        /* Handler on form closure. */
      },
    });
  };

  const hdlClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    hdlOmiseToken();
  };
  return (
    <div className="bg-black text-white p-4 rounded-lg flex flex-col gap-4">
      <span className="text-2xl font-bold flex justify-between items-baseline">
        Top-up
        <small className="text-xs font-light">Fee 3.65% and VAT fee 7%</small>
      </span>
      <Input onChange={hdlChange} placeholder="amount" type="number">
        <WalletIcon />
      </Input>
      {amount == 0 ? (
        ""
      ) : (
        <span>
          You will receive{" "}
          {Math.round(
            amount / 100 -
              ((amount / 100) * 0.0365 + (amount / 100) * 0.0365 * 0.07)
          )}{" "}
          THB
        </span>
      )}
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
      <form className="flex flex-col gap-4">
        <Button
          id="credit-card"
          onClick={hdlClick}
          className=" px-4 py-2 rounded-lg"
          bg="green"
        >
          Pay with Credit Card
        </Button>
      </form>
    </div>
  );
}
