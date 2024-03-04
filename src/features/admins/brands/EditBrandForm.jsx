import React from "react";
import { useState } from "react";
import brandAdmin from "./hooks/brandAdmin";
import { toast } from "react-toastify";

function EditBrandForm({ id }) {
  const [input, setInput] = useState({});
  const { editBrand, brands } = brandAdmin();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(id);
      console.log(`editBrand${id}`);
      console.log("*******", input);

      await editBrand(input, id);
      toast.success("edit brand success");
    } catch (err) {
      console.log(err);
    }
    document.getElementById(`editBrand${id}`).close();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-center font-medium">Edit Brand</h1>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="col-span-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
                <span className="label-text">{id}</span>
              </div>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={input.name}
                className="input input-bordered w-full max-w-xs"
                onChange={handleChangeInput}
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button className="btn w-full" type="submit">
            Edit Brand
          </button>
        </div>
      </form>
    </>
  );
}

export default EditBrandForm;
