import React from "react";
import MainChatHeader from "./MainChatHeader";
import MainChatInput from "./MainChatInput";
import MainChatConversation from "./MainChatConversation";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useChat from "../../../hooks/useChat";
import { useEffect } from "react";

export default function MainChat({ setOpen }) {
  const { conversation } = useChat();

  return (
    <div className="">
      <div className="w-[20vw] h-[55vh] bg-white rounded-2xl">
        {/* Header */}
        <MainChatHeader setOpen={setOpen} />

        {/* LIVE CHAT */}
        <div className="w-full h-[38vh] overflow-auto">
          <MainChatConversation />
        </div>

        {/* Input */}
        <div>
          <MainChatInput setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}
