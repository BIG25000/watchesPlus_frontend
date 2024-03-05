import React from "react";
import BrandForm from "../../features/admins/brands/BrandForm";
import BrandAdminContextProvider from "../../features/admins/brands/contexts/BrandAdminContext";

function BrandPage() {
  return (
    <>
      <BrandAdminContextProvider>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
          <BrandForm />
        </div>
      </BrandAdminContextProvider>
    </>
  );
}

export default BrandPage;
