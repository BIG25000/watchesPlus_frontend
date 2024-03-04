import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                  <span className="label-text text-md">Brand</span>
                </div>
                <select className="select w-full max-w-xs">
                  <option disabled selected>
                    Pick Brand
                  </option>
                  <option>Rolex</option>
                  <option>Omega</option>
                  <option>Seiko</option>
                  <option>Cartier</option>
                  <option>Hublot</option>
                  <option>Casio</option>
                </select>
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Model Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Submariner"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Movement</span>
                </div>
                <select className="select w-full max-w-xs">
                  <option disabled selected>
                    Pick Movement
                  </option>
                  <option>Automatic</option>
                  <option>Quartz</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Gender</span>
                </div>
                <select className="select w-full max-w-xs">
                  <option disabled selected>
                    Pick Gender
                  </option>
                  <option>MALE</option>
                  <option>FEMALE</option>
                  <option>UNISEX</option>
                </select>
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">
                    Power reserve (HOUR)
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="120"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Case material</span>
                </div>
                <input
                  type="text"
                  placeholder="Stainless Steel"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Case diameter (MM)</span>
                </div>
                <input
                  type="text"
                  placeholder="40"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Crystal</span>
                </div>
                <input
                  type="text"
                  placeholder="Sapphire"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Dial</span>
                </div>
                <input
                  type="text"
                  placeholder="Black"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Bracelet material</span>
                </div>
                <input
                  type="text"
                  placeholder="Stainless Steel"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Bracelet color</span>
                </div>
                <input
                  type="text"
                  placeholder="Silver"
                  className="input input-bordered w-full"
                  name="location"
                />
              </label>
            </div>
            <div className="col-span-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-md">Description</span>
                </div>
                <textarea
                  placeholder="The iconic dive watch from Rolex."
                  rows="3"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  name="description"
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
                  className="bg-black hover:bg-egg flex flex-col items-center py-12 rounded-lg"
                  role="button"
                  onClick={() => fileInputEl.current.click()}
                >
                  <span className="text-greeOne bg-egg rounded-xl">
                    Add Photo Watches
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-10">
            <button className="btn bg-greenOne text-egg  mt-5" type="submit">
              Create Product
            </button>
            <Link
              to="/admin/products"
              className="bg-greenOne text-black mt-5 flex items-center underline"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProductForm;
