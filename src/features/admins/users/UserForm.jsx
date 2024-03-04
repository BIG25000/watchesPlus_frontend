import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../../../components/admins/Modal";
import BlockForm from "./BlockForm";
import userAdmin from "./hooks/userAdmin";

function UserForm() {
  const navigate = useNavigate();
  const { users } = userAdmin();
  console.log(users);
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
                <th>id</th>
                <th>user</th>
                <th>email</th>
                <th>mobile</th>
                <th>status</th>
                <th>Buttonblock</th>
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
                        <div
                          className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url(${el.profile_image})`,
                          }}
                        ></div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {el.firstname} {el.lastname}
                        </div>
                        <div className="text-sm opacity-50">
                          {el.display_name}
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
                    <div className="flex gap-3 ">
                      <Modal
                        title="block"
                        id={`block${el.id}`}
                        // id="blockform"
                        button="btn btn-sm bg-gray-400 text-black"
                      >
                        <BlockForm data={el.id} />
                      </Modal>
                      <button
                        className="btn btn-sm bg-gray-400 text-black"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Un-Block
                      </button>
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
