import React from "react";
import Avatar from "../../../components/Avatar";
import Conversation from "../../livechat/components/Conversation";
import { useState } from "react";
import useChat from "../../../hooks/useChat";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";

function MessageIdForm() {
  const [message, setMessage] = useState("");

  const { conversation } = useChat();
  const { authUser } = useAuth();
  const { chatroomId } = useParams();

  console.log(chatroomId, "messageForm");

  return (
    <div className="h-[86.2vh] flex flex-col">
      <div className="flex flex-col bg-slate-500 h-[15vh] items-center justify-center">
        <div className="">
          <Avatar />
        </div>
        <span className="font-semibold text-lg">Profile name</span>
      </div>
      <div className="flex h-[60vh]  overflow-auto mb-3 flex-col">
        {conversation.map((chat) => {
          // console.log(chat, "********");
          return (
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
            />
          );
        })}
      </div>
      <div className="flex flex-row gap-3 h-[10vh]">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Texting here..."
          className="w-[100%] focus:outline-none overflow-auto border m-auto p-2.5 rounded-lg"
        />
        <button
          className="bg-blue-300 py-3 px-5 rounded-lg m-auto hover:bg-blue-400 font-medium"
          type="button"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageIdForm;
