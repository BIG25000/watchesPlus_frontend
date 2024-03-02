import { ChevronDown } from "lucide-react";
import React from "react";

export default function MainChatHeader({ setOpen }) {
  return (
    <>
      <div className="w-full h-[10vh] bg-slate-500 rounded-t-2xl flex flex-row items-center justify-between p-5">
        <div className="flex flex-row items-center gap-3">
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-full flex items-center justify-center">
            <span>Avatar</span>
          </div>
          <h1 className="text-base font-semibold">AdminOrUser</h1>
        </div>
        <div>
          <ChevronDown
            onClick={(prev) => setOpen(!prev)}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
