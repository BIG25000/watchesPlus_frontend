import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import watchAdmin from "./hooks/watchAdmin";
import DeleteWatchForm from "./DeleteWatchForm";
import Modal from "../../../components/admins/Modal";
import brandAdmin from "../brands/hooks/brandAdmin";
import { useState } from "react";

function ProductForm() {
  const navigate = useNavigate();
  const { watches } = watchAdmin();
  const { brands } = brandAdmin();
  const [select, setSelect] = useState("");

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <strong className="text-gray-700 font-medium">Products</strong>
          <select
            className="select  max-w-xs"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option disabled selected>
              Pick search
            </option>
            {brands?.map((el) => (
              <option value={el.name}>{el.name}</option>
            ))}
            <option value="">ALL</option>
          </select>
        </div>

        <Link
          to="/admin/products/create"
          className="btn btn-sm hover:bg-gray-400"
        >
          create product
        </Link>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>ID</th>
                <th>NAME_BRAND</th>
                <th>NAME_MODEL</th>
                <th>MOVEMENT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {watches
                ?.filter((el) => el.brand?.name.includes(select))
                .map((el) => (
                  <tr key={el.id}>
                    <th
                      onClick={() => navigate(`${el.id}`)}
                      role="button"
                      className="underline"
                    >
                      #{el.id}
                    </th>
                    <td className="text-center">{el.brand?.name}</td>
                    <td>{el.modelName}</td>
                    <td>{el.movement}</td>
                    <td>
                      <div className="flex items-center gap-5">
                        <button
                          className="btn btn-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`edit/${el.id}`);
                          }}
                        >
                          EDIT
                        </button>
                        {/* <Modal
                          title="delete"
                          id={`deleteWatch${el.id}`}
                          // id="editBrand"
                          button="btn btn-sm bg-gray-400 text-black"
                        >
                          <DeleteWatchForm id={el.id} />
                        </Modal> */}
                      </div>
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

export default ProductForm;
