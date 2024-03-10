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
  // console.log(chatRoom, "********************");
  // console.log(tempMessage, "temp");
  // console.log(conversation, "conversation2");
  const { authUser } = useAuth();

  useEffect(() => {
    socket.auth = { senderId: authUser?.id };
    // console.log("first");
    socket.connect();
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    socket.on("message1", (msg) => {
      setConversation([...conversation, msg]);
      // setConversation([...conversation, { ...msg }]);
    });
  }, [conversation]);

  const getChatRoomContext = async () => {
    try {
      console.log(authUser, "testing");

      const res = await livechatApi.getChatRoom(authUser?.id);
      setChatRoom(res.data.chatRoom);
      getConversationContext(res.data.chatRoom.id);
      // console.log(res.data.chatRoom, "*******");
    } catch (error) {
      console.log(error);
    }
  };

  const getConversationContext = async (id) => {
    // console.log(chatRoom, "chatroommmmmmmmmmmmmmmmmmmmmmmmmm");
    try {
      console.log(chatRoom, "chatroommmmmmmmmmmmmmmmmmmmmmmmmm");
      if (!id) {
        return;
      }
      // const res = await livechatApi.getConversation(chatRoom?.id);
      const res = await livechatApi.getConversation(+id);
      console.log(res.data.conversation, "conversationnnnnnnnnnnnnnnnnnnnnnn");
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
