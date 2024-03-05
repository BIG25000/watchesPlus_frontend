import React from "react";
import ShipingForm from "../../features/admins/shippings/ShipingForm";

function ShippingPage() {
  return (
    <>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <ShipingForm />
      </div>
    </>
  );
}

export default ShippingPage;
