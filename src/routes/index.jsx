import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePageAdmin from "../pages/admins/HomePageInAdmin";
import HomePageInAdmin from "../pages/admins/HomePageInAdmin";
import ProductPage from "../pages/admins/ProductPage";
import TransactionPage from "../pages/admins/TransactionPage";
import UserPage from "../pages/admins/UserPage";
import SideBarAdmin from "../components/admins/SideBarAdmin";
import CreateProductForm from "../features/admins/products/CreateProductForm";
import ProductIdForm from "../features/admins/products/ProductIdForm";
import UserIdForm from "../features/admins/users/UserIdForm";
import EditProductForm from "../features/admins/products/EditProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  // ************************************************************************ ADMIN *****************
  {
    path: "/admin",
    element: <SideBarAdmin />,
    children: [
      {
        path: "",
        element: <HomePageInAdmin />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/create",
        element: <CreateProductForm />,
      },
      {
        path: "products/edit",
        element: <EditProductForm />,
      },
      {
        path: "products/:productId",
        element: <ProductIdForm />,
      },
      {
        path: "transactions",
        element: <TransactionPage />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "users/:userId",
        element: <UserIdForm />,
      },
    ],
    // ************************************************************************ ADMIN *****************
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
