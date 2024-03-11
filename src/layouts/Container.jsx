import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LiveChat from "../pages/LiveChat";
import ChatContextProvider from "../features/livechat/contexts/ChatContext";
import SearchContextProvider from "../features/search/context/SearchContext";
import WishlistContextProvider from "../features/wishlist/context/WishlistContext";
import ProfileContextProvider from "../features/profile/contexts/ProfileContext";
import ProductContextProvider from "../features/product/contexts/ProductContext";
import WalletContextProvider from "../features/wallet/contexts/WalletContext";

export default function Container() {
  return (
    <>
      <ProfileContextProvider>
        <ProductContextProvider>
          <SearchContextProvider>
            <WishlistContextProvider>
              <WalletContextProvider>
                <Navbar />
                <ChatContextProvider>
                  <LiveChat />
                </ChatContextProvider>
                <Outlet />
                <Footer />
              </WalletContextProvider>
            </WishlistContextProvider>
          </SearchContextProvider>
        </ProductContextProvider>
      </ProfileContextProvider>
    </>
  );
}
