import React from "react";
import MainChatHeader from "./MainChatHeader";
import MainChatInput from "./MainChatInput";
import MainChatConversation from "./MainChatConversation";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useChat from "../../../hooks/useChat";
import { useEffect } from "react";

export default function MainChat({ setOpen }) {
  const { authUser } = useAuth();
  const { conversation, getConversationContext } = useChat();
  // console.log(conversation, "*****************");

  useEffect(() => {
    getConversationContext();
  }, []);

  const receiver = conversation.filter(
    (el) => authUser && authUser?.user.id === el?.senderId
  );

  // console.log(receiver[0].receiver.firstName, "+++++++++++");

  const receiverFirstName = receiver[0].receiver.firstName;
  const receiverLastName = receiver[0].receiver.lastName;

  return (
    <div className="">
      <div className="w-[20vw] h-[55vh] bg-white rounded-2xl">
        {/* Header */}
        <MainChatHeader
          setOpen={setOpen}
          receiverFirstName={receiverFirstName}
          receiverlastName={receiverLastName}
        />

        {/* LIVE CHAT */}
        <div className="w-full h-[38vh] overflow-auto">
          <MainChatConversation />
        </div>

        {/* Input */}
        <div>
          <MainChatInput />
        </div>
      </div>
    </div>
  );
}
