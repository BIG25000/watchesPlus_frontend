import { useContext } from 'react';
import { WishlistContext } from '../features/wishlist/contexts/Wishlistcontext';


export default function useWishlist() {
    return useContext(WishlistContext);
  }