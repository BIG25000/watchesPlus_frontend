import { useContext } from "react";
import { ProfileContext } from "../features/profile/contexts/ProfileContext";

export default function useProfile() {
  return useContext(ProfileContext);
}
