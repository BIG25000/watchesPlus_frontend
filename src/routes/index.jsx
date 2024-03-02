import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import OuterPage from "../layouts/OuterPage";
import Navbar from "../layouts/Navbar";
import HomePage from "../pages/HomePage";

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
    ],
  },
  {
    path: "/homepage",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
