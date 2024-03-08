import React from "react";
import { toast } from "react-toastify";
import watchAdmin from "./hooks/watchAdmin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DeleteWatchForm({ id }) {
  const { deleteWatch, watches } = watchAdmin();
  const navigate = useNavigate();

  const filterWatches = watches.filter((e) => e.id == id)[0];

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-center font-medium">Confirm delete watch ?</h1>
      <div className="grid grid-cols-3 items-center gap-2">
        <div className="col-span-full">
          <h1 className="text-center">ID : {filterWatches?.id}</h1>
          <h1 className="text-center">
            modelName : {filterWatches?.modelName}
          </h1>
          <h1 className="text-center">
            brandName : {filterWatches?.brand.name}
          </h1>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <Link to="/admin/products">
          <button
            className="btn"
            onClick={() => {
              deleteWatch(id);
              // navigate("/admin/products");
              document.getElementById(`deleteWatch${id}`).close();
            }}
          >
            confirm
          </button>
        </Link>

        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            document.getElementById(`deleteWatch${id}`).close();
          }}
        >
          cancal
        </button>
      </div>
    </form>
  );
}

export default DeleteWatchForm;
