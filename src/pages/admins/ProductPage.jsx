import React from "react";
import ProductForm from "../../features/admins/products/ProductForm";
import WatchAdminContextProvider from "../../features/admins/products/contexts/WatchAdminContext";

function ProductPage() {
  return (
    <WatchAdminContextProvider>
      <div className="flex flex-col gap-4">
        <ProductForm />
      </div>
    </WatchAdminContextProvider>
  );
}

export default ProductPage;
