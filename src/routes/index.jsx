import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LiveChat from "../pages/LiveChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OuterPage />,
    children: [
      {
        path: "auth/register",
        element: <RegisterPage />,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
      },
      {
        path: "auth/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "livechat",
        element: <LiveChat />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
