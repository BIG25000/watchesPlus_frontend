import React from "react";
import livechatAdmin from "./hooks/livechatAdmin";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Avatar from "../../../components/Avatar";
import { useEffect } from "react";
import formatTimeAgo from "../../../utils/time-ago";

function MessageForm() {
  const { livechat, getAllConversation } = livechatAdmin();
  const navigate = useNavigate();
  const { authUser } = useAuth();

  useEffect(() => {
    getAllConversation();
  }, [navigate]);

  const livechatSort = livechat?.filter((el) => authUser?.id !== el.sender?.id);

  return (
    <>
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Incoming Message</strong>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>ID</th>
                <th>User</th>
                <th>Email</th>
                <th>Message</th>
                <th>Status</th>
                <th>Sender ID</th>
                <th>Incoming Time</th>
              </tr>
            </thead>
            <tbody>
              {livechatSort?.map((el) => (
                <tr key={el.id}>
                  <th>{el.chatRoomId}</th>
                  <td
                    onClick={() =>
                      navigate(`${el.chatRoomId}/${el.chatRoom.userId}`)
                    }
                    role="button"
                  >
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded-full bg-gray-200 bg-cover bg-no-repeat bg-center">
                          <Avatar src={el.sender?.profileImage} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {el.sender?.firstName} {el.sender?.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{el.sender?.email}</div>
                  </td>
                  <td>
                    <div>
                      {el?.message?.length > 15
                        ? `${el.message.slice(0, 15 - 3)}...`
                        : el.message}
                    </div>
                  </td>
                  <td>
                    <div>{el.sender?.status}</div>
                  </td>
                  <td>
                    <div>{el.sender?.id}</div>
                  </td>
                  <td>
                    <div>{formatTimeAgo(el?.createdAt)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MessageForm;
