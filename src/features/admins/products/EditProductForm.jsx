import React from "react";

function EditProductForm() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Edit Product</strong>
      </div>
      <div className="grid grid-cols-2 mt-3.5">
        <div>
          <div
            className="h-[15rem] w-[15rem]  bg-sky-500 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url()`,
            }}
          ></div>
        </div>
        <div>DETAIL</div>
      </div>
    </div>
  );
}

export default EditProductForm;
