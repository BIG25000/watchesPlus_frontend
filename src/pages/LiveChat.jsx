import { MessagesSquare } from "lucide-react";
import React from "react";

export default function LiveChat() {
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-auto bg-brown">
      <div className="absolute bottom-20 right-14">
        <div className="flex flex-row-reverse gap-6 items-center">
          <div className="show w-[4rem] h-[4rem] rounded-full bg-white flex flex-col justify-center items-center shadow-sm">
            <MessagesSquare size="2.2rem" strokeWidth="1" />
          </div>
          <div className="speech message hide absolute right-0">
            Chat with admin
          </div>
        </div>
      </div>
    </div>
  );
}
