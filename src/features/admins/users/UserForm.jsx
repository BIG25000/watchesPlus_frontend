import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    display_name: "John D",
    email: "john.doe@example.com",
    mobile: "1234567890",
    status: "ACTIVE",
    authentication_method: "NORMAL",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 2,
    firstname: "Alice",
    lastname: "Smith",
    display_name: "Alice S",
    email: "alice.smith@example.com",
    mobile: "9876543210",
    status: "ACTIVE",
    authentication_method: "Google",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 3,
    firstname: "Bob",
    lastname: "Johnson",
    display_name: "Bob J",
    email: "bob.johnson@example.com",
    mobile: "5551234567",
    status: "BLOCK",
    authentication_method: "Facebook",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 4,
    firstname: "Emily",
    lastname: "Brown",
    display_name: "Emily B",
    email: "emily.brown@example.com",
    mobile: "6669876543",
    status: "ACTIVE",
    authentication_method: "ADMIN",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 5,
    firstname: "Michael",
    lastname: "Johnson",
    display_name: "Michael J",
    email: "michael.johnson@example.com",
    mobile: "7776543210",
    status: "ACTIVE",
    authentication_method: "Google",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 6,
    firstname: "Sarah",
    lastname: "Miller",
    display_name: "Sarah M",
    email: "sarah.miller@example.com",
    mobile: "8881234567",
    status: "ACTIVE",
    authentication_method: "NORMAL",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 7,
    firstname: "David",
    lastname: "Wilson",
    display_name: "David W",
    email: "david.wilson@example.com",
    mobile: "9999876543",
    status: "BLOCK",
    authentication_method: "Facebook",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 8,
    firstname: "Emma",
    lastname: "Jones",
    display_name: "Emma J",
    email: "emma.jones@example.com",
    mobile: "4444567890",
    status: "ACTIVE",
    authentication_method: "ADMIN",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 9,
    firstname: "Daniel",
    lastname: "Davis",
    display_name: "Daniel D",
    email: "daniel.davis@example.com",
    mobile: "3336543210",
    status: "ACTIVE",
    authentication_method: "Google",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
  {
    id: 10,
    firstname: "Olivia",
    lastname: "Wilson",
    display_name: "Olivia W",
    email: "olivia.wilson@example.com",
    mobile: "2221234567",
    status: "BLOCK",
    authentication_method: "NORMAL",
    profile_image: "https://source.unsplash.com/80x80?face",
  },
];

function UserForm() {
  const navigate = useNavigate();
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
                <tr key={el.id} onClick={() => navigate(`${el.id}`)}>
                  <th>{el.id}</th>
                  <td>
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
                      <button
                        className="btn btn-sm bg-gray-400 text-black"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Block
                      </button>
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
