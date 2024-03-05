import React from "react";
import Script from "react-load-script";
import * as walletAPI from "../../../apis/wallet";
import { useState } from "react";
import Input from "../../../components/Input";
import { WalletIcon } from "lucide-react";

let OmiseCard;

export default function Wallet() {
  const [amount, setAmount] = useState(0);

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
        await walletAPI.topUp({ token: nonce, amount });
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
    <div className="w-2/3 bg-stone-200 rounded-xl p-8 flex justify-between items-center">
      <div className="w-96 h-60 bg-sky-300 bg-opacity-30 rounded-xl p-4">
        Wallet
      </div>
      <div className="bg-brown text-white p-4 rounded-lg flex flex-col gap-4">
        <span className="text-2xl font-bold">Top-up</span>
        <Input onChange={hdlChange} placeholder="amount" type="number">
          <WalletIcon />
        </Input>
        <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
        <form>
          <div
            id="credit-card"
            type="button"
            onClick={hdlClick}
            className="bg-black px-4 py-2 rounded-lg"
          >
            Pay with Credit Card
          </div>
        </form>
      </div>
    </div>
  );
}
