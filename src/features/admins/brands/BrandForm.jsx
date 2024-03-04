import React from "react";
import { Link } from "react-router-dom";
import { watches } from "../products/ProductForm";
import Modal from "../../../components/admins/Modal";
import EditBrandForm from "./EditBrandForm";
import CreateBrandForm from "./CreateBrandForm";
import { useState } from "react";
import brandAdmin from "./hooks/brandAdmin";
import DeleteForm from "./DeleteForm";

function BrandForm() {
  const { brands } = brandAdmin();

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Brands</strong>
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
            {/* head */}
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>id</th>
                <th>name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {brands.map((el) => (
                <tr>
                  <th>{el.id}</th>
                  <td>{el.name}</td>
                  <td>
                    <Modal
                      title="editBrand"
                      id={`editBrand${el.id}`}
                      // id="editBrand"
                      button="btn btn-sm bg-gray-400 text-black"
                    >
                      <EditBrandForm id={el.id} />
                    </Modal>
                  </td>
                  <td>
                    <Modal
                      title="delete"
                      id={`delete${el.id}`}
                      // id="editBrand"
                      button="btn btn-sm bg-gray-400 text-black"
                    >
                      <DeleteForm id={el.id} />
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BrandForm;
