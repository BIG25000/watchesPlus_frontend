import React from "react";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import socket from "../../../config/socket";
import useChat from "../../../hooks/useChat";

export default function MainChatInput() {
  const [message, setMessage] = useState("");

  // console.log(message);

  const { chatRoom } = useChat();

  const sendMessage = async () => {
    await socket.emit("message", {
      receiverId: chatRoom?.receiver?.id,
      msg: message,
      chatRoomId: chatRoom?.id,
    });

    setMessage("");
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
              color="#1313e1"
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
              color="#1313e1"
              strokeWidth="1.2"
            />
          </button>
        </div>
      )}
    </div>
  );
}
