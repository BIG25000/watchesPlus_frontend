import React from "react";
import * as userApi from "../../../../apis/admins/user";
import { createContext, useState, useEffect } from "react";

export const UserAdminContext = createContext();

function UserAdminContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi
      .getAllUser()
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserAdminContext.Provider value={{ users }}>
      {children}
    </UserAdminContext.Provider>
  );
}

export default UserAdminContextProvider;
