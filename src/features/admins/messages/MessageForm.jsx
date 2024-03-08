import React from "react";
import livechatAdmin from "./hooks/livechatAdmin";
import { useNavigate } from "react-router-dom";

function MessageForm() {
  const { livechat } = livechatAdmin();
  const navigate = useNavigate();

  const livechatSort = livechat?.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Message</strong>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>id</th>
                <th>User</th>
                <th>email</th>
                <th>mobile</th>
                <th>status</th>
                <th>SENDER ID</th>
                <th>RECEIVER ID</th>
              </tr>
            </thead>
            <tbody>
              {livechatSort?.map((el) => (
                // onClick={() => navigate(`${el.id}`)}
                <tr key={el.id}>
                  <th>{el.id}</th>
                  <td
                    onClick={() => navigate(`${el.sender?.id}`)}
                    role="button"
                  >
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div
                          className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url(${el.sender?.profileImage})`,
                          }}
                        ></div>
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
                    <div>{el.sender?.mobile}</div>
                  </td>
                  <td>
                    <div>{el.sender?.status}</div>
                  </td>
                  <td>
                    <div>{el.sender?.id}</div>
                  </td>
                  <td>
                    <div>{el.receiver?.id}</div>
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
