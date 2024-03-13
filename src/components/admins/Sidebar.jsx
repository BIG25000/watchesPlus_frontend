import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants";
import logoImage from "../../assets/logo-watchesPlus.png";
import classNames from "classnames";
import { LogOut } from "lucide-react";
import { Watch } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <>
      <div
        className="h-[100vh] bg-gradient-to-t from-brown to-transparent"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/3b/0e/f6/3b0ef66fdf01daf620925ea5967d14db.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-neutral-900 w-60 p-3 flex flex-col h-full bg-opacity-80">
          <Link to="" className="flex items-center gap-2 px-1 py-3 ">
            <img className="w-[4rem]" src={logoImage} />
            <div to="" className="text-neutral-200 text-lg">
              WATCHESPLUS+
            </div>
          </Link>
          <div className="py-8 flex flex-1 flex-col gap-0.5">
            {DASHBOARD_SIDEBAR_LINKS.map((link) => (
              <SidebarLink key={link.key} link={link} />
            ))}
          </div>
          <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
            <Link
              to="/"
              className={classNames(linkClass, "cursor-pointer text-red-500")}
              onClick={logout}
            >
              <span className="text-xl">
                <LogOut />
              </span>
              Logout
            </Link>
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
