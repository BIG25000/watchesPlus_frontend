import React, { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { MessageCircleMore } from "lucide-react";
import { Bell } from "lucide-react";
import { Search } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  const { logout } = useAuth();
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-end">
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <Link to="/admin/message">
                  <MessageCircleMore fontSize={24} />
                </Link>
              </Popover.Button>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-black bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://as1.ftcdn.net/v2/jpg/00/07/32/48/1000_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg")',
                }}
              >
                <span className="sr-only">Marc Backes</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link to="/" onClick={logout}>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      Sign out
                    </div>
                  )}
                </Menu.Item>
              </Link>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default HeaderAdmin;
