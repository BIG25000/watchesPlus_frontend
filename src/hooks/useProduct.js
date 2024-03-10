import { useContext } from "react";
import { ProductContext } from "../features/product/contexts/ProductContext";

export default function useProduct() {
  return useContext(ProductContext);
}
