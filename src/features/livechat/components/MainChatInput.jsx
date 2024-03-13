import React from "react";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import socket from "../../../config/socket";
import useChat from "../../../hooks/useChat";
import { toast } from "react-toastify";

export default function MainChatInput({ setLoading }) {
  const [message, setMessage] = useState("");

  const { chatRoom } = useChat();

  const sendMessage = async () => {
    try {
      setLoading(true);
      await socket.emit("message", {
        receiverId: chatRoom?.receiver?.id,
        msg: message,
        chatRoomId: chatRoom?.id,
      });

      setMessage("");
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
      if (message.trim() !== "") {
        sendMessage();
      }
    }
  };

  return (
    <div className="relative">
      {message !== "" ? (
        <div className="w-full h-[7vh] flex flex-row justify-between items-center p-3">
          <input
            type="text"
            placeholder="Texting here..."
            className="border border-gray-400 focus:outline-none py-2 px-3 rounded-2xl w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSubmit}>
            <SendHorizontal
              className="absolute top-5 right-5 hover:cursor-pointer"
              color="orange"
              strokeWidth="1.2"
            />
          </button>
        </div>
      ) : (
        <div className="w-full h-[7vh] flex flex-row justify-between items-center p-3">
          <input
            type="text"
            placeholder="Texting here..."
            className="border border-gray-400 focus:outline-none py-2 px-3 rounded-2xl w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSubmit}>
            <SendHorizontal
              className="absolute top-5 right-5 hover:cursor-pointer hidden"
              color="orange"
              strokeWidth="1.2"
            />
          </button>
        </div>
      )}
    </div>
  );
}
