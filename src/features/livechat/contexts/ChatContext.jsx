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
  const [chatRoom, setChatRoom] = useState({});
  const [tempMessage, setTempMessage] = useState("");
  const [receiver, setReceiver] = useState(null);
  // console.log(chatRoom, "********************");
  // console.log(tempMessage, "temp");
  // console.log(conversation, "****************");
  const { authUser } = useAuth();

  console.log(receiver, "************");
  // console.log(authUser, "authUser");
  useEffect(() => {
    socket.on("message", (data) => {
      // console.log(data, "555555555555555555");
      setReceiver(data.receiverId);
      setTempMessage(data.msg);
    });

    if (tempMessage) {
      console.log(chatRoom, "dasdasd");
      if (authUser.role === "USER") {
        // console.log("userrrrrrrrrrrrrrrrrrrrrrrrr");
        createMessageContext(receiver, tempMessage, chatRoom?.id);
      } else if (authUser.role === "ADMIN") {
        // console.log(chatRoom?.sender?.id, "-----------------------");
        createMessageContext(chatRoom?.sender?.id, tempMessage, chatRoom?.id);
      }
    }
    // getConversationContext();
    setTempMessage("");
  }, [tempMessage]);

  useEffect(() => {
    // console.log(authUser.id, "auth");
    console.log(chatRoom, "8888888888888888888888888888");
    if (authUser?.id === chatRoom?.userId) {
      socket.auth = {
        senderId: authUser?.id,
      };
    } else {
      socket.auth = {
        senderId: chatRoom?.adminId,
        // senderId: authUser?.id,
      };
    }
    socket.connect();

    return () => socket.disconnect();
  }, []);

  const getChatRoomContext = async () => {
    try {
      console.log(authUser, "testing");

      if (authUser?.role === "USER") {
        const res = await livechatApi.getChatRoom(authUser?.id);
        // console.log(res.data.chatRoom, "user");
        // console.log(authUser.id, "user");
        setChatRoom(res.data.chatRoom);
        getConversationContext();
        // console.log(res.data, "...................");
      } else {
        const res = await livechatApi.getChatRoom(conversation?.[0].senderId);
        // const res = await livechatApi.getChatRoom(authUser.id);
        // console.log(conversation?.[0].senderId, "admin");
        setChatRoom(res.data.chatRoom);
        getConversationContext();
      }
      // console.log(res.data.chatRoom, "*******");
    } catch (error) {
      console.log(error);
    }
  };

  const getConversationContext = async () => {
    // console.log(chatRoom, "chatroommmmmmmmmmmmmmmmmmmmmmmmmm");
    try {
      console.log(chatRoom, "chatroommmmmmmmmmmmmmmmmmmmmmmmmm");

      const res = await livechatApi.getConversation(chatRoom?.id);
      console.log(res.data.conversation, "conversationnnnnnnnnnnnnnnnnnnnnnn");
      setConversation(res.data.conversation);
    } catch (error) {
      console.log(error);
    }
  };

  const createMessageContext = async (receiverId, message, chatRoomId) => {
    try {
      await livechatApi.createMessage(receiverId, message, chatRoomId);
      // setConversation([...conversation, { message: tempMessage }]);
      getConversationContext();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChatRoomContext();
    // getConversationContext();
  }, [authUser?.id]);

  useEffect(() => {
    getConversationContext();
  }, [chatRoom?.id]);

  return (
    <ChatContext.Provider
      value={{ getConversationContext, conversation, chatRoom }}
    >
      {children}
    </ChatContext.Provider>
  );
}
