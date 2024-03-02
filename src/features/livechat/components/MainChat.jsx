import React from "react";
import MainChatHeader from "./MainChatHeader";
import MainChatInput from "./MainChatInput";
import MainChatConversation from "./MainChatConversation";
import { useState } from "react";

export default function MainChat({ setOpen }) {
  const [own, setOwn] = useState(true);
  return (
    <div className="">
      <div className="w-[20vw] h-[55vh] bg-white rounded-2xl">
        {/* Header */}
        <MainChatHeader setOpen={setOpen} />

        {/* LIVE CHAT */}
        <div className="w-full h-[38vh] overflow-auto">
          <MainChatConversation own={own} setOwn={setOwn} />
        </div>

        {/* Input */}
        <div>
          <MainChatInput />
        </div>
      </div>
    </div>
  );
}
