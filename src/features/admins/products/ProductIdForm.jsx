import React from "react";
import watchAdmin from "./hooks/watchAdmin";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Modal from "../../../components/admins/Modal";
import DeleteWatchForm from "./DeleteWatchForm";
import { Link } from "react-router-dom";

function ProductIdForm() {
  const navigate = useNavigate();
  const { watchId } = useParams();
  const { watches } = watchAdmin();
  const filterWatch = watches.filter((e) => e.id == watchId)[0];

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Product</strong>
      </div>
      <div className="grid grid-cols-2 mt-3.5">
        <div className="flex justify-center">
          <div
            className="h-[20rem] w-[20rem]  bg-sky-500 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${filterWatch?.watchImage})`,
            }}
          ></div>
        </div>
        <div>
          <div>ID : {filterWatch?.id}</div>
          <div>Brand : {filterWatch?.brand.name}</div>
          <div>Model Name : {filterWatch?.modelName}</div>
          <div>Movement : {filterWatch?.movement}</div>
          <div>Gender : {filterWatch?.gender}</div>
          <div>Power reserve (HOUR) : {filterWatch?.powerReserve} </div>
          <div>Case diameter (MM) : {filterWatch?.caseDiameter}</div>
          <div>Crystal : {filterWatch?.crystal}</div>
          <div>Dial : {filterWatch?.dial}</div>
          <div>Bracelet material : {filterWatch?.braceletMaterial}</div>
          <div>Bracelet color : {filterWatch?.braceletColor}</div>
          <div>Description : {filterWatch?.description}</div>
          <div className="flex gap-10 mt-5">
            <Link
              to={`/admin/products/edit/${watchId}`}
              className="btn btn-sm"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              EDIT
            </Link>

            <Modal
              title="delete"
              id={`deleteWatch${watchId}`}
              // id="editBrand"
              button="btn btn-sm bg-gray-400 text-black"
            >
              <DeleteWatchForm id={watchId} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIdForm;
