import React from "react";
import Conversation from "./Conversation";
import useChat from "../../../hooks/useChat";
import useAuth from "../../../hooks/useAuth";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MainChatConversation({ loading }) {
  const { conversation } = useChat();
  const { authUser } = useAuth();
  const scrollRef = useRef();

  const { chatRoomId } = useParams();

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  // console.log(conversation, "conversation------------------");

  return (
    <div className="flex flex-col gap-3">
      {conversation.map((chat) => {
        return (
          <div ref={scrollRef}>
            <Conversation
              key={chat.id}
              chatRoomId={chat.chatRoomId}
              senderFirstName={chat.sender?.firstName}
              senderLastName={chat.sender?.lastName}
              senderId={chat.senderId}
              receiverFirstName={chat.receiver?.firstName}
              receiverLastName={chat.receiver?.lastName}
              receiverId={chat.receiverId}
              message={chat.message}
              createdAt={chat.createdAt}
              ownMessage={chat.senderId === authUser?.id}
              loading={loading}
            />
          </div>
        );
      })}
    </div>
  );
}
