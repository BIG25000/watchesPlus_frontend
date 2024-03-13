import React from "react";
import ProfileInfo from "../../features/profile/components/ProfileInfo";
import ProfileMarket from "../../features/profile/components/ProfileMarket";

export default function ProfilePage() {
  return (
    <div className="w-[1200px] flex flex-col items-center mx-auto bg-gray-100">
      <ProfileInfo />
      <ProfileMarket />
    </div>
  );
}
