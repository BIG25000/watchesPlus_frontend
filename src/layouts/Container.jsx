import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LiveChat from "../pages/LiveChat";
import ChatContextProvider from "../features/livechat/contexts/ChatContext";

export default function Wrapper() {
  return (
    <>
      <Navbar />
      <ChatContextProvider>
        <LiveChat />
      </ChatContextProvider>
      <Outlet />
      <Footer />
    </>
  );
}
