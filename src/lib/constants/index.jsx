import { ArrowRightLeft } from "lucide-react";
import { Settings } from "lucide-react";
import { Info } from "lucide-react";
import { User } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { LayoutGrid } from "lucide-react";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Home",
    path: "/admin",
    icon: <LayoutGrid />,
  },
  {
    key: "products",
    label: "products",
    path: "/admin/products",
    icon: <PackageSearch />,
  },
  {
    key: "transactions",
    label: "transactions",
    path: "/admin/transactions",
    icon: <ArrowRightLeft />,
  },
  {
    key: "users",
    label: "users",
    path: "/admin/users",
    icon: <User />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <Info />,
  },
];
