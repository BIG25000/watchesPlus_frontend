import React from "react";
import inventoryAdmin from "./hooks/inventoryAdmin";

function FailverifyForm({ id }) {
  const { inventorys, failedInventory } = inventoryAdmin();

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
                failedInventory(id);
                document.getElementById(`failverify${id}`).close();
              }}
            >
              confirm failverify
            </button>
            <button
              className="underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`failverify${id}`).close();
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

export default FailverifyForm;
