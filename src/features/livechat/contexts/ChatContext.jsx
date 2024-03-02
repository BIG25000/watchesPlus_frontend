import { createContext } from "react";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  return <ChatContext.Provider>{children}</ChatContext.Provider>;
}
