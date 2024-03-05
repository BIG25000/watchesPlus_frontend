import myAPI from "../config/myAPI";

export const getConversation = () => myAPI.get("/livechat/get-conversation");
export const createMessage = (receiverId, message, chatRoomId) =>
  myAPI.post("/livechat/message", { receiverId, message, chatRoomId });
