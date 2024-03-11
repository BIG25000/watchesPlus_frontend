import React from "react";
import Modal from "../../../components/admins/Modal";
import VerifyForm from "../transactions/VerifyForm";
import AddTrackingForm from "./AddTrackingForm";
import shippingAdmin from "./hooks/shippingAdmin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShipingForm() {
  const { shippings } = shippingAdmin();
  const navigate = useNavigate();
  const [select, setSelect] = useState("");

  console.log(shippings, "*********************************");

  return (
    <div>
      <div className="flex gap-5 items-center">
        <strong className="text-gray-700 font-medium">Shipping</strong>
        <select
          className="select  max-w-xs"
          onChange={(e) => setSelect(e.target.value)}
        >
          <option disabled selected>
            Pick search
          </option>
          <option value="PENDING">PENDING</option>
          <option value="ONSHIPPING">ONSHIPPING</option>
          <option value="">ALL</option>
        </select>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>id</th>
                <th>User</th>
                <th>address</th>
                <th>watch_id</th>
                <th>DateCreate</th>
                <th>status</th>
                <th>tacking_number</th>
                <th>buttonAddtackingNumber</th>
              </tr>
            </thead>
            <tbody>
              {shippings
                ?.filter((el) => el.status.includes(select))
                .map((el) => (
                  <tr>
                    <th>{el.id}</th>
                    <td
                      onClick={() =>
                        navigate(`/admin/users/${el.inventory?.userId}`)
                      }
                      role="button"
                    >
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div
                            className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                            style={{
                              backgroundImage: `url(${el.inventory?.user?.profileImage})`,
                            }}
                          ></div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {el.inventory?.user?.firstName}
                            {el.inventory?.user?.lastName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        {el.address?.district} - {el.address?.subDistrict} -{" "}
                        {el.address?.province} - {el.address?.zipCode}
                      </div>
                    </td>
                    <td>
                      {el.inventory?.watch?.modelName} - -
                      {el.inventory?.watch?.brand?.name}
                    </td>
                    <td>{el.createdAt?.slice(0, 10)}</td>
                    <td>{el.status}</td>
                    <td>{el.trackingNumber}</td>
                    <td>
                      {!(el.status === "ONSHIPPING") ? (
                        <Modal
                          title="addTracking"
                          // id={`editBrand${el.id}`}
                          id={`addTracking${el.id}`}
                          button="btn btn-sm bg-gray-400 text-black"
                        >
                          <AddTrackingForm id={el.id} />
                        </Modal>
                      ) : (
                        <button
                          className="btn btn-sm bg-gray-400 text-black"
                          disabled="disabled"
                        >
                          addTracking
                        </button>
                      )}
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

export default ShipingForm;
