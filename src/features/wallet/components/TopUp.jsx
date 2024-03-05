import React from "react";
import Script from "react-load-script";
import * as walletAPI from "../../../apis/wallet";
import { useState } from "react";
import Input from "../../../components/Input";
import { WalletIcon } from "lucide-react";
import Button from "../../../components/Button";
import useWallet from "../../../hooks/useWallet";

let OmiseCard;

export default function TopUp() {
  const [amount, setAmount] = useState(0);

  const { getWallet } = useWallet();

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
        console.log(nonce);
        const response = await walletAPI.topUp({ token: nonce, amount });
        console.log(response);
      },
      onFormClosed: () => {
        /* Handler on form closure. */
        getWallet();
      },
    });
  };

  const hdlClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    hdlOmiseToken();
  };
  return (
    <div className="bg-brown text-white p-4 rounded-lg flex flex-col gap-4">
      <span className="text-2xl font-bold flex justify-between items-baseline">
        Top-up
        <small className="text-xs font-light">Fee 3.65% and VAT fee 7%</small>
      </span>
      <Input onChange={hdlChange} placeholder="amount" type="number">
        <WalletIcon />
      </Input>
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
