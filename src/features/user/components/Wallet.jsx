import React from "react";
import Script from "react-load-script";

let OmiseCard;

export default function Wallet() {
  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: import.meta.env.VITE_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "WatchesPlus+",
      submitLabel: "Pay NOW",
      buttonLabel: "Pay with Omise",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#credit-card", {
      amount: 100000,
    });
    OmiseCard.attach();
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
  };
  return (
    <div className="w-2/3 bg-stone-200 rounded-xl p-8 flex justify-between items-center">
      <div className="w-96 h-60 bg-sky-300 bg-opacity-30 rounded-xl p-4">
        Wallet
      </div>
      <div>
        <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
        <form>
          <div id="credit-card" type="button" onClick={handleClick}>
            ชำระเงินด้วยบัตรเครดิต
          </div>
        </form>
      </div>
    </div>
  );
}
