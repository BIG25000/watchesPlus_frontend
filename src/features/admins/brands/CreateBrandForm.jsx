import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import brandAdmin from "./hooks/brandAdmin";

function CreateBrandForm() {
  const [input, setInput] = useState({});
  const { createBrand } = brandAdmin();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setInput({ name: "" });

      await createBrand(input);
    } catch (err) {
      console.log(err);
    }
    document.getElementById("createBrand").close();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-center font-medium">Create Brand</h1>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="col-span-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={input.name}
                onChange={handleChangeInput}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button className="btn  w-full" type="submit">
            Create Brand
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateBrandForm;
