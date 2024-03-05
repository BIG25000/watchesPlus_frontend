import { useContext } from "react";
import { ChatContext } from "../features/livechat/contexts/ChatContext";

export default function useChat() {
  return useContext(ChatContext);
}
