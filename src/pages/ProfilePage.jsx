import React from "react";

export default function ProfilePage() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center">
      <div className=" w-2/3 bg-stone-200 rounded-xl p-12 flex gap-6 justify-center items-center">
        <div className=" w-48 h-48 bg-white rounded-full text-center">
          Avatar
        </div>
        <div className="flex flex-col gap-4 w-3/4 h-full">
          <div className="flex flex-col">
            <small>Name :</small>
            <span className="bg-white px-4 py-2 rounded-lg text-xl">
              Test Test..........
            </span>
          </div>
          <div className="flex flex-col">
            <small>Email :</small>
            <span className="bg-white px-4 py-2 rounded-lg text-xl">
              Test Test..........
            </span>
          </div>
          <div className="flex flex-col">
            <small>Address :</small>
            <span className="bg-white px-4 py-2 rounded-lg text-xl">
              Test Test..........
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
