import { ChevronDown } from "lucide-react";
import React from "react";
import Avatar from "../../../components/Avatar";
import logo from "../../../assets/logo-watchesPlus.png";

export default function MainChatHeader({ setOpen }) {
  return (
    <>
      <div className="w-full h-[10vh] bg-gradient-to-t from-orange-100 to-yellow-700 rounded-t-2xl flex flex-row items-center justify-between p-5">
        <div className="flex flex-row items-center gap-3">
          <div className="w-[2.5vw] h-[2.5vw] bg-gradient-to-r from-orange-100 to-yellow-700 rounded-full flex items-center justify-center h">
            <Avatar
              src={logo}
              extendClassName="w-full h-full bg-gradient-to-r from-orange-100 to-yellow-700"
            />
          </div>
          <h1 className="text-base font-semibold text-white">ADMIN</h1>
        </div>
        <div>
          <ChevronDown
            onClick={(prev) => setOpen(!prev)}
            className="hover:cursor-pointer text-white"
          />
        </div>
      </div>
    </>
  );
}
