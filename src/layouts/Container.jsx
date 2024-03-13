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
// import Background from "../components/Background";

export default function Container() {
  const { authUser } = useAuth();
  return (
    <div
      style={{
        backgroundImage: `url("https://ychef.files.bbci.co.uk/1280x720/p0bzmxtx.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
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
    </div>
  );
}
