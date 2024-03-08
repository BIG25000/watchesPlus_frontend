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

  const updateStatusBlock = async (id) => {
    try {
      const res = await userApi.updateStatusBlock(id);

      // const findindex = users.findIndex((el) => el.id === res.data.users.id);
      // const newUsers = users.with(findindex, res.data.users);

      const newUsers = users.map((el) =>
        el.id == res.data.users.id ? res.data.users : el
      );

      setUsers(newUsers);

      // setUsers(res.data.users.id); ถ้าคืนเป็น Id ค่าปกติที่ไม่ใช่ Array แตก
      toast.success("block user success");
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatusUnblock = async (id) => {
    try {
      const res = await userApi.updateStatusUnblock(id);
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
      value={{ users, updateStatusBlock, updateStatusUnblock }}
    >
      {children}
    </UserAdminContext.Provider>
  );
}

export default UserAdminContextProvider;
