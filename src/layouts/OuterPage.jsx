import React from "react";
import { Outlet } from "react-router-dom";

export default function OuterPage() {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[url('/Users/ohmm/CC16/group-project/watchesPlus_frontend/src/assets/outer-bg.jpeg')]">
      <div className="w-full h-full bg-gradient-to-t from-brown to-transparent bg-cover bg-center flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
