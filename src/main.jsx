import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import WishlistContextProvider from "./features/wishlist/contexts/Wishlistcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <WishlistContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </WishlistContextProvider>
  </>
);
