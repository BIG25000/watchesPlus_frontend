import React from "react";
import Conversation from "./Conversation";
import useChat from "../../../hooks/useChat";
import useAuth from "../../../hooks/useAuth";

export default function MainChatConversation({}) {
  const { conversation } = useChat();
  const { authUser } = useAuth();
  // console.log(conversation);

  return (
    <div className="flex flex-col gap-3">
      {conversation?.map((chat) => {
        // console.log(chat, "********");
        return (
          <>
            <Conversation
              key={chat.id}
              chatRoomId={chat.chatRoomId}
              senderFirstName={chat.sender.firstName}
              senderLastName={chat.sender.lastName}
              senderId={chat.senderId}
              receiverFirstName={chat.receiver.firstName}
              receiverLastName={chat.receiver.lastName}
              receiverId={chat.receiverId}
              message={chat.message}
              createdAt={chat.createdAt}
              ownMessage={chat.senderId === authUser.user.id}
            />
          </>
        );
      })}
    </div>
  );
}
