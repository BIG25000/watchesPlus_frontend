import React from "react";
import * as livechatApi from "../../../../apis/admins/livechat";
import * as livechatAdminApi from "../../../../apis/livechat";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import socket from "../../../../config/socket";
import { useParams } from "react-router-dom";

export const MessageAdminContext = createContext();

function MessageAdminContextProvider({ children }) {
  const [livechat, setLivechat] = useState();
  const [conversation, setConversation] = useState([]);

  const { authUser } = useAuth();
  const { chatroomId } = useParams();

  useEffect(() => {
    livechatApi
      .getAllLivechat()
      .then((res) => setLivechat(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    socket.on("message1", (msg) => {
      setConversation([...conversation, msg]);
    });
  }, [conversation]);

  useEffect(() => {
    socket.auth = { senderId: authUser?.id };
    socket.connect();
    return () => socket.disconnect();
  }, []);

  const getConversationContext = async () => {
    // console.log(chatRoom, "chatroommmmmmmmmmmmmmmmmmmmmmmmmm");
    try {
      if (!chatroomId) {
        return;
      }
      const res = await livechatAdminApi.getConversation(+chatroomId);
      setConversation(res.data.conversation);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getConversationContext();
  }, [+chatroomId]);

  return (
    <MessageAdminContext.Provider value={{ livechat, conversation }}>
      {children}
    </MessageAdminContext.Provider>
  );
}

export default MessageAdminContextProvider;
