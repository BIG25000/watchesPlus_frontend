import React from "react";
import Sidebar from "./Sidebar";
import HeaderAdmin from "./HeaderAdmin";
import { Outlet } from "react-router-dom";

function SideBarAdmin() {
  return (
    <>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <HeaderAdmin />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBarAdmin;
