import React from "react";
import Conversation from "./Conversation";

export default function MainChatConversation({ setOwn }) {
  return (
    <div className="flex flex-col gap-3">
      <Conversation own="true" />
      <Conversation />
      <Conversation own="true" />
    </div>
  );
}
