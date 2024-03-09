import React from "react";
import inventoryAdmin from "./hooks/inventoryAdmin";

function VerifyForm({ id }) {
  const { inventorys, verifyInventory } = inventoryAdmin();

  const filterInventory = inventorys?.filter((e) => e.id == id)[0];

  return (
    <>
      <form>
        <h1 className="text-center font-medium mb-4">Confirm Verify</h1>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="">
            User : {filterInventory.user?.firstName}
            {filterInventory.user?.lastName}
          </div>
          <div>Brand : {filterInventory.watch?.brand.name}</div>
          <div>Model : {filterInventory.watch?.modelName}</div>

          <div className="flex gap-4">
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                verifyInventory(id);
                document.getElementById(`verify${id}`).close();
              }}
            >
              confirm verify
            </button>
            <button
              className="underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`verify${id}`).close();
              }}
            >
              back
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default VerifyForm;
