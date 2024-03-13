import React from "react";
import Modal from "../../../components/admins/Modal";
import VerifyForm from "../transactions/VerifyForm";
import AddTrackingForm from "./AddTrackingForm";
import shippingAdmin from "./hooks/shippingAdmin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FailForm from "./FailForm";
import Avatar from "../../../components/Avatar";

function ShipingForm() {
  const { shippings } = shippingAdmin();
  const navigate = useNavigate();
  const [select, setSelect] = useState("");

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
          <option value="FAILED">FAILED</option>
          <option value="">ALL</option>
        </select>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>ID</th>
                <th></th>
                <th>referenceNumber</th>
                <th>NAME_BRAND</th>
                <th>MODEL</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>tacking_number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shippings
                ?.filter((el) => el.status.includes(select))
                .filter(
                  (el) => el.status !== "SUCCESS" && el.status !== "CANCELED"
                )
                .map((el) => (
                  <tr key={el.id}>
                    <th>{el.id}</th>
                    <td
                      onClick={() =>
                        navigate(`/admin/users/${el.inventory?.userId}`)
                      }
                      role="button"
                    >
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="avatar">
                            <div className="rounded-full bg-gray-200 bg-cover bg-no-repeat bg-center">
                              <Avatar src={el.inventory?.user?.profileImage} />
                            </div>
                          </div>
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
                      <div>{el.inventory?.referenceNumber}</div>
                    </td>
                    <td>{el.inventory?.watch?.brand?.name}</td>
                    <td>{el.inventory?.watch?.modelName}</td>
                    <td>{el.createdAt?.slice(0, 10)}</td>
                    <td>{el.status}</td>
                    <td>{el.trackingNumber}</td>
                    <td>
                      <div className="flex gap-5 items-center">
                        {!(
                          el.status === "ONSHIPPING" || el.status === "FAILED"
                        ) ? (
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
                        {el.status === "FAILED" ? (
                          <Modal
                            title="DETAIL"
                            // id={`editBrand${el.id}`}
                            id={`DETAIL${el.id}`}
                            button="btn btn-sm bg-gray-400 text-black"
                          >
                            <FailForm id={el.id} issue={el.issue} />
                          </Modal>
                        ) : (
                          false
                        )}
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

export default ShipingForm;
