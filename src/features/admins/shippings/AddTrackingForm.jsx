import React from "react";

function AddTrackingForm() {
  return (
    <>
      <form>
        <h1 className="text-center font-medium">Add tracking </h1>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="col-span-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">tracking number</span>
                <span className="label-text"></span>
              </div>
              <input
                type="text"
                placeholder="EF582621151TH"
                name="nameBrand"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button className="btn" type="submit">
            add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTrackingForm;
