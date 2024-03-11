import React from "react";
import { Link } from "react-router-dom";

import Modal from "../../../components/admins/Modal";
import EditBrandForm from "./EditBrandForm";
import CreateBrandForm from "./CreateBrandForm";
import { useState } from "react";
import brandAdmin from "./hooks/brandAdmin";
import DeleteForm from "./DeleteForm";

function BrandForm() {
  const { brands } = brandAdmin();
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <strong className="text-gray-700 font-medium">Brands</strong>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered max-w-xs"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            className="btn bg-egg text-greenTwo"
            onClick={() => setSearch("")}
          >
            RESET
          </button>
        </div>

        <Modal
          title="createBrand"
          id="createBrand"
          button="btn btn-sm hover:bg-gray-400"
        >
          <CreateBrandForm />
        </Modal>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full ">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>id</th>
                <th>image</th>
                <th>name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {brands
                ?.filter((el) =>
                  el.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((el) => (
                  <tr>
                    <th>{el.id}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div
                            className="h-14 w-14 bg-sky-500 bg-cover bg-no-repeat bg-center"
                            style={{
                              backgroundImage: `url(${el.brandImage})`,
                              backgroundSize: "100% 100%", // กำหนดให้รูปภาพขยายเต็มกรอบ
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>{el.name}</td>
                    <td>
                      <div className="flex items-center gap-4">
                        <Modal
                          title="editBrand"
                          id={`editBrand${el.id}`}
                          // id="editBrand"
                          button="btn btn-sm bg-gray-400 text-black"
                        >
                          <EditBrandForm id={el.id} />
                        </Modal>
                        {/* <Modal
                          title="delete"
                          id={`delete${el.id}`}
                          // id="editBrand"
                          button="btn btn-sm bg-gray-400 text-black"
                        >
                          <DeleteForm id={el.id} />
                        </Modal> */}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BrandForm;
