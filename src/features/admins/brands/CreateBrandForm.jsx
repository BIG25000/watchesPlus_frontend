import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import brandAdmin from "./hooks/brandAdmin";
import { useRef } from "react";
import { Camera } from "lucide-react";

function CreateBrandForm() {
  const [input, setInput] = useState({});
  const fileInputEl = useRef(null);
  const [image, setImage] = useState(null);
  const { createBrand } = brandAdmin();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      // Validate ว่าชื่อแบรนด์ไม่เป็นค่าว่าง
      if (!input.name || input.name.trim() === "") {
        toast.error("Please enter brand name.");
        return;
      }

      // Validate ว่าไฟล์รูปภาพถูกเลือกหรือไม่
      if (!image) {
        toast.error("Please select brand image.");
        return;
      }

      setLoading(true);
      const formData = new FormData();
      for (let i in input) {
        formData.append(i, input[i]);
      }
      formData.append("brandImage", image);
      await createBrand(formData);
      const data = {};
      for (let i in input) {
        data[i] = "";
      }
      setInput({ name: "" });
      setInput(data);
      setImage(null);
      setLoading(false);
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
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-40">
          <span className="loading loading-ring w-[10rem] z-30 text-green-800"></span>
        </div>
      )}
      {/* <form onSubmit={handleFormSubmit}>
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
              <div className="col-span-1/2 mt-5">
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
                      className="absolute top-1 right-1 font-black text-white bg-red-500 rounded-full w-6 h-6 flex justify-center items-center hover:bg-red-600 transition duration-300"
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
                    className="bg-black hover:bg-gray-800 flex flex-col items-center py-12 rounded-lg cursor-pointer"
                    role="button"
                    onClick={() => fileInputEl.current.click()}
                  >
                    <span className="text-green-100 bg-gray-900 px-4 py-2 rounded-xl flex items-center">
                      <Camera className="mr-2" size={20} />
                      Add Photo Watches
                    </span>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <button className="btn  w-full" type="submit">
            Create Brand
          </button>
        </div>
      </form> */}
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
              <div className="col-span-1/2 mt-5">
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
                      className="absolute top-1 right-1 font-black text-white bg-red-500 rounded-full w-6 h-6 flex justify-center items-center hover:bg-red-600 transition duration-300"
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
                    className="bg-black hover:bg-gray-800 flex flex-col items-center py-12 rounded-lg cursor-pointer"
                    role="button"
                    onClick={() => fileInputEl.current.click()}
                  >
                    <span className="text-green-100 bg-gray-900 px-4 py-2 rounded-xl flex items-center">
                      <Camera className="mr-2" size={20} />
                      Add Photo Watches
                    </span>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <button className="btn  w-full" type="submit">
            Create Brand
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateBrandForm;
