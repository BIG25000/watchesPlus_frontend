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
            className="show w-[4rem] h-[4rem] rounded-full bg-yellow-800 flex flex-col justify-center items-center hover:cursor-pointer hover:bg-yellow-900 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          >
            <MessagesSquare color="white" size="2.2rem" strokeWidth="1" />
          </div>
          <div className="speech message hide absolute right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            Chat with admin
          </div>
        </div>
      ) : (
        <MainChat setOpen={setOpen} />
      )}
    </>
  );
}
