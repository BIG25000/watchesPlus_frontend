import { useState, createContext } from "react";

import * as profileAPI from "../../../apis/profile";
import { toast } from "react-toastify";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileInfo, setProfileInfo] = useState({});

  const getProfileInfo = async () => {
    const res = await profileAPI.getProfileInfo();
    setProfileInfo(res.data);
  };

  const updateProfileInfo = async (formData) => {
    const res = await profileAPI.updateProfileInfo(formData);
    setProfileInfo(res.data.profile);
    toast.success(res.data.message);
    return res;
  };

  return (
    <ProfileContext.Provider
      value={{ profileInfo, getProfileInfo, updateProfileInfo }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
