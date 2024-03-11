import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import brandAdmin from "../brands/hooks/brandAdmin";
import watchAdmin from "../products/hooks/watchAdmin";
import { useParams } from "react-router-dom";
import { Camera } from "lucide-react";

function EditProductForm() {
  const [input, setInput] = useState({});
  const [image, setImage] = useState(null);
  const fileInputEl = useRef(null);
  const { brands } = brandAdmin(); // context
  const { editWatch, watches } = watchAdmin(); // context
  const { watchId } = useParams();
  const [loading, setLoading] = useState(false);

  const filterWatches = watches.filter((e) => e.id == watchId)[0];

  // console.log(filterWatches.modelName);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      for (let i in input) {
        formData.append(i, input[i]);
      }
      console.log(image, "CHECK WATCH IMAGE");
      if (image) {
        formData.append("watchImage", image);
      }

      await editWatch(formData, watchId);

      const data = {};

      for (let i in input) {
        data[i] = "";
      }

      setInput(data);

      setImage(null);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: +e.target.value ? +e.target.value : e.target.value,
    });
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-40">
          <span className="loading loading-ring w-[10rem] z-30 text-green-800"></span>
        </div>
      )}
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="flex justify-between items-center">
          <strong className="text-gray-700 font-medium">Edit Product</strong>
        </div>
        <div className="grid grid-cols-2 mt-3.5">
          <form onSubmit={handleSubmitForm}>
            <div className="grid grid-cols-2 gap-1 items-center mt-2">
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Brand</span>
                  </div>
                  <select
                    className="select w-full max-w-xs"
                    name="brandId"
                    onChange={handleChangeInput}
                    value={input.brandId || filterWatches?.brandId}
                  >
                    <option disabled selected>
                      Pick Brand
                    </option>
                    {brands?.map((el) => (
                      <option value={el.id}>{el.name}</option>
                    ))}
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
                    placeholder={filterWatches?.modelName}
                    className="input input-bordered w-full"
                    name="modelName"
                    onChange={handleChangeInput}
                    value={input.modelName}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Movement</span>
                  </div>
                  <select
                    className="select w-full max-w-xs"
                    onChange={handleChangeInput}
                    name="movement"
                    value={input.movement || filterWatches?.movement}
                  >
                    <option disabled selected>
                      Pick Movement
                    </option>
                    <option value="AUTOMATIC">AUTOMATIC</option>
                    <option value="QUARTZ">QUARTZ</option>
                  </select>
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Gender</span>
                  </div>
                  <select
                    className="select w-full max-w-xs"
                    onChange={handleChangeInput}
                    name="gender"
                    value={input?.gender || filterWatches?.gender}
                  >
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
                    placeholder={filterWatches?.powerReserve}
                    className="input input-bordered w-full"
                    name="powerReserve"
                    value={input.powerReserve}
                    onChange={handleChangeInput}
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
                    placeholder={filterWatches?.caseMaterial}
                    className="input input-bordered w-full"
                    name="caseMaterial"
                    value={input.caseMaterial}
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">
                      Case diameter (MM)
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder={filterWatches?.caseDiameter}
                    className="input input-bordered w-full"
                    name="caseDiameter"
                    value={input.caseDiameter}
                    onChange={handleChangeInput}
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
                    placeholder={filterWatches?.crystal}
                    className="input input-bordered w-full"
                    name="crystal"
                    value={input.crystal}
                    onChange={handleChangeInput}
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
                    placeholder={filterWatches?.dial}
                    className="input input-bordered w-full"
                    name="dial"
                    value={input.dial}
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">
                      Bracelet material
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder={filterWatches?.braceletMaterial}
                    className="input input-bordered w-full"
                    name="braceletMaterial"
                    value={input.braceletMaterial}
                    onChange={handleChangeInput}
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
                    placeholder={filterWatches?.braceletColor}
                    className="input input-bordered w-full"
                    name="braceletColor"
                    value={input.braceletColor}
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="col-span-full">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Description</span>
                  </div>
                  <textarea
                    placeholder={filterWatches?.description}
                    rows="3"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs resize-none"
                    name="description"
                    value={input.description}
                    onChange={handleChangeInput}
                  />
                </label>
              </div>

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
            </div>
            <div className="flex gap-10">
              <button className="btn bg-black text-egg  mt-5" type="submit">
                Edit Product
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
    </>
  );
}

export default EditProductForm;
