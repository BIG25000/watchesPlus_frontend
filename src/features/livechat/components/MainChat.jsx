import React from "react";
import MainChatHeader from "./MainChatHeader";
import MainChatInput from "./MainChatInput";
import MainChatConversation from "./MainChatConversation";
import { useState } from "react";

export default function MainChat({ setOpen }) {
  const [loading, setLoading] = useState(false);
  return (
    <div className="">
      <div className="w-[20vw] h-[55vh] bg-white rounded-2xl">
        {/* Header */}
        <MainChatHeader setOpen={setOpen} />

        {/* LIVE CHAT */}
        <div className="w-full h-[38vh] overflow-auto">
          <MainChatConversation loading={loading} />
        </div>

        {/* Input */}
        <div>
          <MainChatInput setOpen={setOpen} setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
}
