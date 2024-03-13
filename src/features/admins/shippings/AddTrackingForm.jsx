import React from "react";
import { useState } from "react";
import shippingAdmin from "./hooks/shippingAdmin";
import { toast } from "react-toastify";

function AddTrackingForm({ id }) {
  const [input, setInput] = useState({});
  const { shippings, updateTracking } = shippingAdmin();

  console.log(shippings, "sssssssssssss");

  const filterShippings = shippings?.filter((e) => e.id == id)[0];

  // const handleFormSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     await updateTracking(input, id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   document.getElementById(`addTracking${id}`).close();
  // };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      // ตรวจสอบว่าช่องกรอกเลขที่ติดตามไม่เป็นค่าว่าง
      if (!input.trackingNumber || !input.trackingNumber.trim()) {
        toast.error("Please enter tracking number.");
        return;
      }

      // เช็คความยาวของเลขที่ติดตาม
      if (input.trackingNumber.trim().length !== 10) {
        toast.error("Tracking number must be 10 characters long.");
        return;
      }

      // เช็คว่าเลขที่ติดตามประกอบด้วยภาษาอังกฤษและตัวเลขเท่านั้น
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      if (!alphanumericRegex.test(input.trackingNumber.trim())) {
        toast.error(
          "Tracking number must contain only English letters and digits."
        );
        return;
      }

      await updateTracking(input, id);
    } catch (err) {
      console.log(err);
    }
    document.getElementById(`addTracking${id}`).close();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-center font-medium">Add tracking </h1>

        <div className="flex flex-col justify-center items-center gap-3 mt-5">
          <div className="label-text">
            FIRSTNAME : {filterShippings.inventory?.user?.firstName}
          </div>
          <div className="label-text">
            LASTNAME : {filterShippings.inventory?.user?.lastName}
          </div>
          <div className="label-text">
            MODELNAME : {filterShippings.inventory?.watch?.modelName}
          </div>
          <div className="label-text">
            BRANDNAME : {filterShippings.inventory?.watch?.brand?.name}
          </div>
          <div className="label-text">
            referenceNumber : {filterShippings.inventory?.referenceNumber}
          </div>
          <input
            type="text"
            placeholder="EF582621151TH"
            name="trackingNumber"
            value={input.trackingNumber}
            className="input input-bordered w-full max-w-xs"
            onChange={handleChangeInput}
          />
          <button className="btn" type="submit">
            ADD TRACKING NUMBER
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTrackingForm;
