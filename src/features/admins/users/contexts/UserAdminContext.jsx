import React from "react";
import * as userApi from "../../../../apis/admins/user";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const UserAdminContext = createContext();

function UserAdminContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi
      .getAllUser()
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  const updateStatusUser = async (id) => {
    try {
      const res = await userApi.updateStatusUser(id);
      const findindex = users.findIndex((el) => el.id === res.data.users.id);
      const newUsers = users.with(findindex, res.data.users);
      setUsers(newUsers);
      toast.success("block user success");
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatusUser2 = async (id) => {
    try {
      const res = await userApi.updateStatusUser2(id);
      const findindex = users.findIndex((el) => el.id === res.data.users.id);
      const newUsers = users.with(findindex, res.data.users);
      setUsers(newUsers);
      toast.success("unblock user success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserAdminContext.Provider
      value={{ users, updateStatusUser, updateStatusUser2 }}
    >
      {children}
    </UserAdminContext.Provider>
  );
}

export default UserAdminContextProvider;
