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
import useAuth from "../hooks/useAuth";
import Background from "../components/Background";

export default function Container() {
  const { authUser } = useAuth();
  return (
    <div style={{backgroundImage:`url("https://st2.depositphotos.com/2013817/6206/v/950/depositphotos_62061569-stock-illustration-sketch-watches-background.jpg")`}}>
      <ProfileContextProvider>
        <WalletContextProvider>
          <ProductContextProvider>
            <SearchContextProvider>
              <WishlistContextProvider>
                <Navbar />
                {/* <Background/> */}
                <ChatContextProvider>
                  {authUser ? <LiveChat /> : ""}
                </ChatContextProvider>
                <Outlet />
                <Footer />
              </WishlistContextProvider>
            </SearchContextProvider>
          </ProductContextProvider>
        </WalletContextProvider>
      </ProfileContextProvider>
    </div>
  );
}
