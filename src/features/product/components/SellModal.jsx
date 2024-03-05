import React from "react";
import InventoryList from "./InventoryList";

export default function SellModal(props) {
  return (
    <dialog id="sell" className="modal">
      <div className="modal-box flex flex-col gap-6 min-h-96  max-w-4xl">
        <h3 className="font-bold text-lg ">
          Sell-Omega Speedmaster Professional Moonwatch
        </h3>
        <div className="flex flex-col gap-4 text-start" >
          <h1>My Inventory</h1>
          <InventoryList />
          <InventoryList />
          <InventoryList />
        </div>
        <div className="grid grid-cols-2 ">
          <div className="w-36  flex gap-8">

          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-8 gap-4 justify-between" >
              <label>What price do you want to pay:</label>
              <input className="w-24 text-end p-2" type="number" />
            </div>
            <div className="flex h-8 gap-4 justify-between" >
              <label>Minimum Price:</label>
              <input disabled className="w-24 text-center text-end p-2" value="255" />
            </div>
            <div className="flex h-8 gap-4 justify-between" >
              <label>Total Price:</label>
              <input disabled className="w-24 text-center text-end p-2" value="255" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-success">PLACE ORDER</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
