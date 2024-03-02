import React from "react";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export default function MainChatInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          />
          <SendHorizontal
            className="absolute top-5 right-5 hover:cursor-pointer"
            color="#1313e1"
            strokeWidth="1.2"
            onClick={handleSubmit}
          />
        </div>
      ) : (
        <div className="w-full h-[7vh] flex flex-row justify-between items-center p-3">
          <input
            type="text"
            placeholder="Texting here..."
            className="border border-gray-400 focus:outline-none py-2 px-3 rounded-2xl w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendHorizontal
            className="absolute top-5 right-5 hover:cursor-pointer hidden"
            color="#1313e1"
            strokeWidth="1.2"
            onClick={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
