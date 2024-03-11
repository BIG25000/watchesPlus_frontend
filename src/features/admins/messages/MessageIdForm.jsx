import React from "react";
import Avatar from "../../../components/Avatar";
import Conversation from "../../livechat/components/Conversation";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import socket from "../../../config/socket";
import livechatAdmin from "./hooks/livechatAdmin";
import * as livechatAdminApi from "../../../apis/livechat";
import { useEffect } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";

function MessageIdForm() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const { authUser } = useAuth();
  const { chatroomId, senderId } = useParams();
  const { conversation } = livechatAdmin();
  const scrollRef = useRef();

  const sendMessage = async () => {
    try {
      setLoading(true);
      await socket.emit("message", {
        receiverId: +senderId,
        msg: message,
        chatRoomId: +chatroomId,
      });
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      sendMessage();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const getUserById = async (id) => {
    try {
      const res = await livechatAdminApi.getUser(+id);
      console.log(res.data);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserById(senderId);
  }, [chatroomId]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <div className="h-[86.2vh] flex flex-col">
      <div className="flex flex-col  h-[15vh] items-center justify-center">
        <Avatar src={user.profileImage} />
        <span className="font-semibold text-lg">
          {user.firstName} {user.lastName}
        </span>
      </div>
      <div className="flex h-[60vh]  overflow-auto mb-3 flex-col">
        {conversation?.map((chat) => {
          // console.log(chat, "********");
          return (
            <div ref={scrollRef}>
              <Conversation
                key={chat.id}
                chatRoomId={chatroomId}
                senderFirstName={chat.sender?.firstName}
                senderLastName={chat.sender?.lastName}
                senderId={chat.senderId}
                receiverFirstName={chat.receiver?.firstName}
                receiverLastName={chat.receiver?.lastName}
                receiverId={chat.receiverId}
                src={chat.sender?.profileImage}
                message={chat.message}
                createdAt={chat.createdAt}
                ownMessage={chat.senderId === authUser?.id}
                loading={loading}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-3 h-[10vh]">
        <input
          type="text"
          value={message}
          onKeyDown={handleKeyPress}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Texting here..."
          className="w-[100%] focus:outline-none overflow-auto border m-auto p-2.5 rounded-lg"
        />
        <button
          className="bg-blue-300 py-3 px-5 rounded-lg m-auto hover:bg-blue-400 font-medium"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageIdForm;
