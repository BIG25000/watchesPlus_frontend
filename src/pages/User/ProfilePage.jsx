import React from "react";
import ProfileInfo from "../../features/profile/components/ProfileInfo";
import ProfileMarket from "../../features/profile/components/ProfileMarket";

export default function ProfilePage() {
  return (
    <div className="w-[1200px] mx-auto bg-gray-100">
      <ProfileInfo />
      <ProfileMarket />
    </div>
  );
}
