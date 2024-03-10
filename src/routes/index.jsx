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
import ProfilePage from "../pages/ProfilePage";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Container from "../layouts/Container";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProfileHistoryPage from "../pages/ProfileHistoryPage";
import SearchProductPage from "../pages/SearchProductPage";
import WalletPage from "../pages/WalletPage";
import ShippingPage from "../pages/admins/ShippingPage";
import BrandPage from "../pages/admins/BrandPage";
import BrandAdminContextProvider from "../features/admins/brands/contexts/BrandAdminContext";
import WatchAdminContextProvider from "../features/admins/products/contexts/WatchAdminContext";
import UserIdPage from "../pages/admins/UserIdPage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProfileContextProvider from "../features/profile/contexts/ProfileContext";
import UserAdminContextProvider from "../features/admins/users/contexts/UserAdminContext";
import InventoryAdminContextProvider from "../features/admins/transactions/contexts/InventoryAdminContext";
import MessagePage from "../pages/admins/MessagePage";
import ShippingAdminContextProvider from "../features/admins/shippings/contexts/ShippingAdminContext";
import MessageAdminContextProvider from "../features/admins/messages/contexts/MessageAdminContext";
import MessageIdPage from "../pages/admins/MessageIdPage";
import WishlistPage from "../pages/WishlistPage";
import ChatContextProvider from "../features/livechat/contexts/ChatContext";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: (
          <ProfileContextProvider>
            <Container />
          </ProfileContextProvider>
        ),
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
                element: <WishlistPage />,
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
        path: "brand",
        element: <BrandPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
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
          <InventoryAdminContextProvider>
            <TransactionPage />
          </InventoryAdminContextProvider>
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
          <ChatContextProvider>
            <MessageAdminContextProvider>
              <MessagePage />
            </MessageAdminContextProvider>
          </ChatContextProvider>
        ),
      },
      {
        path: "message/:chatroomId",
        element: (
          <ChatContextProvider>
            <MessageIdPage />
          </ChatContextProvider>
        ),
      },
    ],
    // ************************************************************************ ADMIN *****************
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
