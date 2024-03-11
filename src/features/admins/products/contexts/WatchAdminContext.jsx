import React from "react";
import * as watchApi from "../../../../apis/admins/watch";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const WatchAdminContext = createContext();

function WatchAdminContextProvider({ children }) {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    watchApi
      .getAllWatch()
      .then((res) => setWatches(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const createWatch = async (formData) => {
    try {
      await watchApi.createWatch(formData);
      toast.success("create success");
    } catch (error) {
      console.log(error);
    }
  };

  const editWatch = async (formData, id) => {
    try {
      const res = await watchApi.editWatch(formData, id);
      setWatches((el) =>
        el.map((el1) => (el1.id == res.data.data.id ? res.data.data : el1))
      ); // เฟตซ่อนเพื่ออัพเดท  เพตโฮเดอร์ และรีเซตของ
      toast.success("edit sucess");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWatch = async (id) => {
    try {
      await watchApi.deleteWatch(id);

      // const res = await watchApi.getAllWatch();
      // setWatches(res.data.data);

      // const res = await watchApi.getAllWatch();

      setWatches(watches.filter((el) => el.id != id)); //ไม่ต้องเฟตอันนี้

      toast.success("delete brand success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WatchAdminContext.Provider
      value={{ watches, createWatch, editWatch, deleteWatch }}
    >
      {children}
    </WatchAdminContext.Provider>
  );
}

export default WatchAdminContextProvider;
