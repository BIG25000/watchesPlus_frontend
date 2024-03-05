import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LiveChat from "../pages/LiveChat";
import ChatContextProvider from "../features/livechat/contexts/ChatContext";
import SearchContextProvider from "../features/search/context/SearchContext";

export default function Wrapper() {
  return (
    <>
      <SearchContextProvider>
        <Navbar />
        <ChatContextProvider>
          <LiveChat />
        </ChatContextProvider>
        <Outlet />
        <Footer />
      </SearchContextProvider>
    </>
  );
}
