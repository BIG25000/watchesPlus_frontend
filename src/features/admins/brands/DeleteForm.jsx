import React from "react";
import brandAdmin from "./hooks/brandAdmin";
import { toast } from "react-toastify";

function DeleteForm({ id }) {
  const { deleteBrand } = brandAdmin();
  return (
    <form
      className="flex flex-col gap-4"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteBrand(id);
        toast.success("delete brand success");
        document.getElementById(`delete${id}`).close();
      }}
    >
      <h1 className="text-center font-medium">Confirm delete brand ?</h1>
      <div className="grid grid-cols-3 items-center gap-2">
        <div className="col-span-full">
          <h1 className="text-center">Rolex {id}</h1>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button className="btn" type="submit">
          confirm
        </button>
        <button className="btn">cancal</button>
      </div>
    </form>
  );
}

export default DeleteForm;
