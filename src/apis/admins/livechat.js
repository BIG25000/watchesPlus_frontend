import myAPI from "../../config/myAPI";

export const getAllLivechat = () => myAPI.get("livechat/get-all-chatroom");
export const getAllConversation = () =>
  myAPI.get("livechat/get-all-conversation");
