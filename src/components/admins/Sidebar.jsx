import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/constants";
import { HiOutlineLogout } from "react-icons/hi";
import classNames from "classnames";
import { LogOut } from "lucide-react";
import { Watch } from "lucide-react";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <>
      <div
        className="h-[100vh]"
        style={{
          backgroundImage: `url(https://images3.alphacoders.com/690/69009.jpg)`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-neutral-900 w-60 p-3 flex flex-col h-full bg-opacity-60">
          <div className="flex items-center gap-2 px-1 py-3 ">
            <Watch />
            <Link to="" className="text-neutral-200 text-lg">
              WATCHESPLUS+
            </Link>
          </div>
          <div className="py-8 flex flex-1 flex-col gap-0.5">
            {DASHBOARD_SIDEBAR_LINKS.map((link) => (
              <SidebarLink key={link.key} link={link} />
            ))}
          </div>
          <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
              <SidebarLink key={link.key} link={link} />
            ))}
            <div
              className={classNames(linkClass, "cursor-pointer text-red-500")}
            >
              <span className="text-xl">
                <LogOut />
              </span>
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
