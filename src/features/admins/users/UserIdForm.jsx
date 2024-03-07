import React from "react";
import userAdmin from "./hooks/userAdmin";
import { Link } from "react-router-dom";
import Modal from "../../../components/admins/Modal";
import { useParams } from "react-router-dom";

function UserIdForm() {
  const { users } = userAdmin();
  const { userId } = useParams();
  console.log(users);
  const filterUsers = users.filter((e) => e.id == userId)[0];
  return (
    <div>
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">User</strong>
      </div>
      <div className="grid grid-cols-2 mt-3.5">
        <div className="flex justify-center">
          <div
            className="h-[20rem] w-[20rem]  bg-sky-500 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${filterUsers?.profileImage})`,
            }}
          ></div>
        </div>
        <div>
          <div className="text-center">User ID {filterUsers?.id}</div>
          <div className="text-center">
            FirstName : {filterUsers?.firstName}
          </div>
          <div className="text-center">LastName : {filterUsers?.lastName}</div>
          <div className="text-center">Mobile : {filterUsers?.mobile}</div>
          <div className="text-center">Role : {filterUsers?.role}</div>
          <div className="text-center">Status : {filterUsers?.status}</div>

          <div className="flex gap-10 mt-5 justify-center">
            <Link to="/admin/users" className="text-black underline">
              Back users
            </Link>
            <Link to="/admin/inventory" className="text-black underline">
              Back inventory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserIdForm;
