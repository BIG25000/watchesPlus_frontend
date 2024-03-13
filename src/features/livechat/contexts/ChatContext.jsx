import { useState } from "react";
import { createContext } from "react";
import * as livechatApi from "../../../apis/livechat";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import socket from "../../../config/socket";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [conversation, setConversation] = useState([]);
  const [chatRoom, setChatRoom] = useState({});

  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      socket.auth = { senderId: authUser?.id };
      socket.connect();
      return () => socket.disconnect();
    }
  }, [authUser]);

  useEffect(() => {
    socket.on("message1", (msg) => {
      setConversation([...conversation, msg]);
    });
  }, [conversation]);

  const getChatRoomContext = async () => {
    try {
      const res = await livechatApi.getChatRoom(authUser?.id);
      setChatRoom(res.data.chatRoom);
      getConversationContext(res.data.chatRoom.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getConversationContext = async (id) => {
    try {
      if (!id) {
        return;
      }
      const res = await livechatApi.getConversation(+id);
      setConversation(res.data.conversation);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        getConversationContext,
        conversation,
        chatRoom,
        getChatRoomContext,
        setConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
