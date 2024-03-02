import React from "react";
import { useRef } from "react";
import { useState } from "react";

function CreateProductForm() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputEl = useRef(null);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Create Product</strong>
      </div>
      <div className="grid grid-cols-2 mt-3.5">
        <form>
          <div className="grid grid-cols-2 gap-1 items-center mt-2">
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Title</span>
                </div>
                <input
                  type="text"
                  placeholder="ลำคลองงู"
                  className="input input-bordered w-full"
                  name="title"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Location</span>
                </div>
                <input
                  type="text"
                  placeholder="ตาก"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">startDate</span>
                </div>
                <input
                  type="date"
                  placeholder="ตาก"
                  className="input input-bordered w-full"
                  name="startDate"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">endDate</span>
                </div>
                <input
                  type="date"
                  placeholder="ตาก"
                  className="input input-bordered w-full"
                  name="endDate"
                />
              </label>
            </div>
            <label className="form-control w-full max-w-xs col-span-full">
              <div className="label">
                <span className="label-text text-md">Description</span>
              </div>
              <textarea
                className="block w-full outline-none resize-none"
                rows="5"
                placeholder="เดินป่าที่ตาก"
                name="description"
              />
            </label>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">meetingPlace</span>
                </div>
                <input
                  type="text"
                  placeholder="หมอชิต"
                  className="input input-bordered w-full"
                  name="meetingPlace"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">numPeople</span>
                </div>
                <input
                  type="text"
                  placeholder="10"
                  className="input input-bordered w-full"
                  name="numPeople"
                />
              </label>
            </div>
            <div className="col-span-full mt-5">
              <input
                type="file"
                className="hidden"
                ref={fileInputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
              {image ? (
                <div
                  className="relative"
                  onClick={() => fileInputEl.current.click()}
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt="post"
                    className="mx-auto max-h-[15rem]"
                  />
                  <button
                    className="absolute top-1 right-1 font-black"
                    onClick={(e) => {
                      e.stopPropagation(); // ให้มันหยุดทำงานซ้ำซ้อน
                      setImage(null);
                      fileInputEl.current.value = "";
                    }}
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <div
                  className="bg-greenTwo hover:bg-egg flex flex-col items-center py-12 rounded-lg"
                  role="button"
                  onClick={() => fileInputEl.current.click()}
                >
                  <span className="text-greeOne bg-egg rounded-xl">
                    Add Photo Trip
                  </span>
                </div>
              )}
            </div>
          </div>
          <button
            className="btn bg-greenOne text-egg w-full mt-5"
            type="submit"
          >
            Create Trip
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProductForm;
