import { createContext } from "react";
import { useState } from "react";
import * as wishlistApi from "../../../api/wishlist";

export const WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
  const [cards, setCards] = useState([]);

  return (
    <WishlistContext.Provider value={{ cards, setCards }}>
      {children}
    </WishlistContext.Provider>
  );
}
