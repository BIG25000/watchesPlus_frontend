import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../../../components/admins/Modal";
import BlockForm from "./BlockForm";
import userAdmin from "./hooks/userAdmin";
import UnblockForm from "./UnblockForm";
import livechatAdmin from "../messages/hooks/livechatAdmin";
import Avatar from "../../../components/Avatar";

function UserForm() {
  const navigate = useNavigate();
  const { users } = userAdmin();

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Users</strong>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>ID</th>
                <th>User</th>
                <th>EMAIL</th>
                <th>MOBILE</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((el) => (
                // onClick={() => navigate(`${el.id}`)}
                <tr key={el.id}>
                  <th>{el.id}</th>
                  <td onClick={() => navigate(`${el.id}`)} role="button">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded-full bg-gray-200 bg-cover bg-no-repeat bg-center">
                          <Avatar src={el.profileImage} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {el.firstName} {el.lastName}
                        </div>
                        <div className="text-sm opacity-50">
                          {el.displayName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{el.email}</div>
                  </td>
                  <td>
                    <div>{el.mobile}</div>
                  </td>
                  <td>
                    <div>{el.status}</div>
                  </td>
                  <td>
                    <div className="flex flex-row justify-around">
                      <div className="flex gap-3 ">
                        {!(el.status === "INACTIVE") ? (
                          <Modal
                            title="block"
                            id={`block${el.id}`}
                            button="btn btn-sm bg-gray-400 text-black"
                          >
                            <BlockForm id={el.id} />
                          </Modal>
                        ) : (
                          <button
                            className="btn btn-sm bg-gray-400 text-black"
                            disabled="disabled"
                          >
                            block
                          </button>
                        )}
                        {el.status === "INACTIVE" ? (
                          <Modal
                            title="unblock"
                            id={`unblock${el.id}`}
                            // id="blockform"
                            button="btn btn-sm bg-gray-400 text-black"
                          >
                            <UnblockForm id={el.id} />
                          </Modal>
                        ) : (
                          <button
                            className="btn btn-sm bg-gray-400 text-black"
                            disabled="disabled"
                          >
                            unblock
                          </button>
                        )}
                      </div>
                      <div
                        onClick={() =>
                          navigate(
                            `/admin/message/${el.sender[0].id}/${el.sender[0].userId}`
                          )
                        }
                        className="btn btn-sm"
                      >
                        <button>Chat</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // <>
    //   <div className="border-x border-gray-200 rounded-sm mt-3">
    //     <div className="overflow-x-auto">

    //     </div>
    //   </div>
    // </>
  );
}

export default UserForm;
