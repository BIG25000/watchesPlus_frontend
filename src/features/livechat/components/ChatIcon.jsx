import { MessagesSquare } from "lucide-react";
import { useState } from "react";
import MainChat from "./MainChat";
import useChat from "../../../hooks/useChat";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

export default function ChatIcon() {
  const [open, setOpen] = useState(false);

  const { authUser } = useAuth();
  const { getChatRoomContext, setConversation } = useChat();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    getChatRoomContext();
    if (!authUser) {
      setConversation([]);
    }
  }, [authUser?.id]);

  return (
    <>
      {!open ? (
        <div className="flex flex-row-reverse gap-6 items-center">
          <div
            onClick={handleClick}
            className="show w-[4rem] h-[4rem] rounded-full bg-white flex flex-col justify-center items-center shadow-sm hover:cursor-pointer"
          >
            <MessagesSquare size="2.2rem" strokeWidth="1" />
          </div>
          <div className="speech message hide absolute right-0 shadow-sm">
            Chat with admin
          </div>
        </div>
      ) : (
        <MainChat setOpen={setOpen} />
      )}
    </>
  );
}
