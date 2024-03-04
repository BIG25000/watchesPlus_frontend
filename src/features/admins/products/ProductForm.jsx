import React from "react";
import { getOrderStatus } from "../../../lib/helpers";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import watchAdmin from "./hooks/watchAdmin";

function ProductForm() {
  const navigate = useNavigate();
  const { watches } = watchAdmin();
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Products</strong>
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
                <th>id</th>
                <th>brand_id : brandName</th>
                <th>modelName</th>
                <th>movement</th>
                <th>ButtonEdit</th>
                <th>ButtonDelete</th>
              </tr>
            </thead>
            <tbody>
              {watches.map((el) => (
                <tr key={el.id}>
                  <th
                    onClick={() => navigate(`${el.id}`)}
                    role="button"
                    className="underline"
                  >
                    #{el.id}
                  </th>
                  <td className="text-center">{el.brandId}</td>
                  <td>{el.modelName}</td>
                  <td>{el.movement}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`edit/${el.id}`);
                      }}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm bg-gray-400 text-black"
                      onClick={(e) => e.stopPropagation()}
                    >
                      DELETE
                    </button>
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

// {
//   id: 1,
//   brand_id: 1,
//   model_name: "Submariner",
//   movement: "Automatic",
//   gender: "UNISEX",
//   power_reserve: 50,
//   case_material: "Stainless Steel",
//   case_diameter: 40,
//   crystal: "Sapphire",
//   dial: "Black",
//   bracelet_material: "Stainless Steel",
//   bracelet_color: "Silver",
//   description: "The iconic dive watch from Rolex.",
// },
