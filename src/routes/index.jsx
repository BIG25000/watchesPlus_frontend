import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
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
import ProfilePage from "../pages/User/ProfilePage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/User/ProductDetailPage";
import ProfileHistoryPage from "../pages/User/ProfileHistoryPage";
import SearchProductPage from "../pages/SearchProductPage";
import WalletPage from "../pages/User/WalletPage";
import ShippingPage from "../pages/admins/ShippingPage";
import BrandPage from "../pages/admins/BrandPage";
import BrandAdminContextProvider from "../features/admins/brands/contexts/BrandAdminContext";
import WatchAdminContextProvider from "../features/admins/products/contexts/WatchAdminContext";
import UserIdPage from "../pages/admins/UserIdPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import Container from "../layouts/Container";
import UserAdminContextProvider from "../features/admins/users/contexts/UserAdminContext";
import InventoryAdminContextProvider from "../features/admins/transactions/contexts/InventoryAdminContext";
import MessagePage from "../pages/admins/MessagePage";
import ShippingAdminContextProvider from "../features/admins/shippings/contexts/ShippingAdminContext";
import MessageAdminContextProvider from "../features/admins/messages/contexts/MessageAdminContext";
import MessageIdPage from "../pages/admins/MessageIdPage";
import WishlistPage from "../pages/User/WishlistPage";
import InventoryPage from "../pages/User/InventoryPage";
import ChatContextProvider from "../features/livechat/contexts/ChatContext";
import TrackingTest from "../pages/admins/TrackingTest";
import ProtectRouteUser from "../features/auth/components/ProtectRouteUser";
import ProtectRouteAdmin from "../features/auth/components/ProtectRouteAdmin";
import RedirectWhenAdminLogin from "../features/auth/components/RedirectWhenAdminLogin";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: (
          <RedirectWhenAdminLogin>
            <Container />
          </RedirectWhenAdminLogin>
        ),
        children: [
          {
            path: "",
            element: <HomePage />,
            lazy: () => import("../pages/HomePage"),
          },
          {
            path: "search",
            element: <SearchProductPage />, //search + all watches
            lazy: () => import("../pages/SearchProductPage"),
          },
          {
            path: "profile",
            element: (
              <ProtectRouteUser>
                <Outlet />
              </ProtectRouteUser>
            ), //search + all watches
            children: [
              {
                path: "",
                element: <ProfilePage />,
                lazy: () => import("../pages/User/ProfilePage"),
              },
              {
                path: "wishlist",
                element: <WishlistPage />,
                lazy: () => import("../pages/User/WishlistPage"),
              },
              {
                path: "history",
                element: <ProfileHistoryPage />,
                lazy: () => import("../pages/User/ProfileHistoryPage"),
              },
              {
                path: "inventory",
                element: <InventoryPage />,
                lazy: () => import("../pages/User/InventoryPage"),
              },
              {
                path: "wallet",
                element: <WalletPage />,
                lazy: () => import("../pages/User/WalletPage"),
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
                lazy: () => import("../pages/User/ProductDetailPage"),
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
  // ************************************************************************ ADMIN *****************
  {
    path: "/admin",
    element: (
      <ProtectRouteAdmin>
        <SideBarAdmin />
      </ProtectRouteAdmin>
    ),
    children: [
      {
        path: "",
        element: <BrandPage />,
      },
      {
        path: "brand",
        element: <BrandPage />,
      },
      {
        path: "products",
        element: (
          <BrandAdminContextProvider>
            <ProductPage />
          </BrandAdminContextProvider>
        ),
      },
      {
        path: "products/create",
        element: (
          <WatchAdminContextProvider>
            <BrandAdminContextProvider>
              <CreateProductForm />
            </BrandAdminContextProvider>
          </WatchAdminContextProvider>
        ),
      },
      {
        path: "products/edit/:watchId",
        element: (
          <WatchAdminContextProvider>
            <BrandAdminContextProvider>
              <EditProductForm />
            </BrandAdminContextProvider>
          </WatchAdminContextProvider>
        ),
      },
      {
        path: "products/:watchId",
        element: (
          <WatchAdminContextProvider>
            <BrandAdminContextProvider>
              <ProductIdForm />,
            </BrandAdminContextProvider>
          </WatchAdminContextProvider>
        ),
      },
      {
        path: "inventory",
        element: (
          <BrandAdminContextProvider>
            <InventoryAdminContextProvider>
              <TransactionPage />
            </InventoryAdminContextProvider>
          </BrandAdminContextProvider>
        ),
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "users/:userId",
        element: (
          <UserAdminContextProvider>
            <UserIdPage />
          </UserAdminContextProvider>
        ),
      },
      {
        path: "shipping",
        element: (
          <ShippingAdminContextProvider>
            <ShippingPage />
          </ShippingAdminContextProvider>
        ),
      },
      {
        path: "message",
        element: (
          <MessageAdminContextProvider>
            <MessagePage />
          </MessageAdminContextProvider>
        ),
      },
      {
        path: "message/:chatroomId/:senderId",
        element: (
          <MessageAdminContextProvider>
            <MessageIdPage />
          </MessageAdminContextProvider>
        ),
      },
      {
        path: "trackingtest",
        element: <TrackingTest />,
      },
    ],
    // ************************************************************************ ADMIN *****************
  },
]);

export default function Router() {
  return (
    // <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
    // </Suspense>
  );
}
