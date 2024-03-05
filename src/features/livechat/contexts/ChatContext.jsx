import { useState } from "react";
import { createContext } from "react";
import * as livechatApi from "../../../apis/livechat";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import socket from "../../../config/socket";
// import { io as socketIO } from "socket.io-client";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [conversation, setConversation] = useState([]);

  const { authUser } = useAuth();
  // console.log(authUser.user);
  console.log(conversation);
  useEffect(() => {
    socket.on("received", (msg) => {
      console.log(msg, "---------------------------");
      setConversation([...conversation, { message: msg }]);
    });
  }, [conversation]);

  useEffect(() => {
    socket.connect();

    return () => socket.disconnect();
  }, []);

  const getConversationContext = async () => {
    try {
      const res = await livechatApi.getConversation();
      console.log(res.data.conversation);
      setConversation(res.data.conversation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getConversationContext();
  }, [authUser?.user?.id]);

  return (
    <ChatContext.Provider value={{ getConversationContext, conversation }}>
      {children}
    </ChatContext.Provider>
  );
}
