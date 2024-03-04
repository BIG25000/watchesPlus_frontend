import React from "react";
import brandAdmin from "./hooks/brandAdmin";
import { toast } from "react-toastify";

function DeleteForm({ id }) {
  const { deleteBrand, brands } = brandAdmin();

  const filterBrands = brands.filter((e) => e.id == id)[0];

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-center font-medium">Confirm delete brand ?</h1>
      <div className="grid grid-cols-3 items-center gap-2">
        <div className="col-span-full">
          <h1 className="text-center">ID : {filterBrands?.id}</h1>
          <h1 className="text-center">brandName : {filterBrands?.name}</h1>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button
          className="btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteBrand(id);

            document.getElementById(`delete${id}`).close();
          }}
        >
          confirm
        </button>
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            document.getElementById(`delete${id}`).close();
          }}
        >
          cancal
        </button>
      </div>
    </form>
  );
}

export default DeleteForm;
