import React from "react";

export default function BuyModal(props) {
  return (
    <dialog id="buy" className="modal">
      <div className="modal-box flex flex-col gap-6 min-h-96  max-w-4xl relative">
        <div className="absolute right-5 top-3 text-xl font-bold cursor-pointer" onClick={()=>document.getElementById('buy').close()}>X</div>
        <h3 className="font-bold text-lg">
          Buy-Omega Speedmaster Professional Moonwatch
        </h3>
        <div className="grid grid-cols-2">
          <div className="w-36  flex gap-8">
            <img src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg" />
            <div className="text-sm min-w-40">
              Omega Speedmaster Professional Moonwatch
            </div>
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
