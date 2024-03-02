import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import OuterPage from "../layouts/OuterPage";
import HomePage from "../pages/HomePage";
import Container from "../layouts/Container";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Container />,
        children: [
          {
            path: "",
            element: <HomePage />, //hompage
          },
          {
            path: "search",
            element: <>SearchPage</>, //search + all watches
          },
          {
            path: "profile",
            element: <Outlet />, //search + all watches
            children: [
              {
                path: "",
                element: <>ProfilePage</>,
              },
              {
                path: "wishlist",
                element: <>WishlistPage</>,
              },
              {
                path: "history",
                element: <>HistoryPage</>,
              },
              {
                path: "inventory",
                element: <>InventoryPage</>,
                children: [
                  {
                    path: ":inventoryId",
                    element: <>Watch in InventoryId</>,
                  },
                ],
              },
              {
                path: "wallet",
                element: <>WalletPage</>,
              },
            ],
          },
          {
            path: "watch",
            element: <Outlet />,
            children: [
              {
                path: ":watchId",
                element: <ProductDetailPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/register",
        element: (
          <OuterPage>
            <RegisterPage />
          </OuterPage>
        ),
      },
      {
        path: "/login",
        element: (
          <OuterPage>
            <LoginPage />
          </OuterPage>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <OuterPage>
            <ForgotPasswordPage />
          </OuterPage>
        ),
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
