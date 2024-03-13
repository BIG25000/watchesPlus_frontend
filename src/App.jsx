import { Suspense } from "react";
import Router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
      <ToastContainer autoClose={1000} />
    </Suspense>
  );
}
