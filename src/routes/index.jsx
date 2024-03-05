import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import OuterPage from "../layouts/OuterPage";
import ProfilePage from "../pages/ProfilePage";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Container from "../layouts/Container";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProfileHistoryPage from "../pages/ProfileHistoryPage";
import SearchProductPage from "../pages/SearchProductPage";
import WalletPage from "../pages/WalletPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";

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
            element: <SearchProductPage />, //search + all watches
          },
          {
            path: "profile",
            element: <Outlet />, //search + all watches
            children: [
              {
                path: "",
                element: <ProfilePage />,
              },
              {
                path: "wishlist",
                element: <>WishlistPage</>,
              },
              {
                path: "history",
                element: <ProfileHistoryPage />,
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
                element: <WalletPage />,
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
          <RedirectIfAuthenticated>
            <OuterPage>
              <RegisterPage />
            </OuterPage>
          </RedirectIfAuthenticated>
        ),
      },
      {
        path: "/login",
        element: (
          <RedirectIfAuthenticated>
            <OuterPage>
              <LoginPage />
            </OuterPage>
          </RedirectIfAuthenticated>
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
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
