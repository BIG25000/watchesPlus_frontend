import myAPI from "../config/myAPI";

export const getConversation = (chatRoomId) =>
  myAPI.post("/livechat/get-conversation", { chatRoomId });
export const createMessage = (receiverId, message, chatRoomId) =>
  myAPI.post("/livechat/message", { receiverId, message, chatRoomId });

export const getChatRoom = (userId) =>
  myAPI.post("/livechat/get-room", { userId });
export const getUser = () => myAPI.get("/livechat/get-user");
