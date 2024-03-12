import React from "react";
import Button from "../../../components/Button";
import ShippingModal from "./ShippingModal";
import useAuth from "../../../hooks/useAuth";
import CancelModal from "./CancelModal";
import ConfirmModal from "./ConfirmModal";
import CancelShippingModal from "./CancelShippingModal";
import { useNavigate } from "react-router-dom";

export default function TableList(props) {
  const navigate = useNavigate()
  const { authUser } = useAuth();

  const {
    pending,
    activeData,
    setLoading,
    waitingData,
    shippingData,
    loading,
  } = props;

  console.log(shippingData);
  return (
    <>
      {/* pendingLists */}
      {pending && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Model Name</th>
                <th>Brand</th>
                <th>Reference Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {pending.map((e, i) => {
                return (
                  <tr className="hover" key={e.id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20" src={e.watch.watchImage} />
                    </td>
                    <td>{e.watch.modelName}</td>
                    <td>{e.watch.brand.name}</td>
                    <td>{e.referenceNumber}</td>
                    <td>{e.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* watingLists */}
      {waitingData && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Model Name</th>
                <th>Brand</th>
                <th>Reference Number</th>
                <th>Edit Address</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {/* waitingLists */}
              {waitingData.map((e, i) => {
                return (
                  <tr className="hover" key={e.id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20" src={e.watch.watchImage} />
                    </td>
                    <td>{e.watch.modelName}</td>
                    <td>{e.watch.brand.name}</td>
                    <td>{e.referenceNumber}</td>
                    <td>
                      <Button
                        bg="green"
                        color="white"
                        onClick={async () => {
                          document
                            .getElementById(`address_edit_${e.id}`)
                            .showModal();
                        }}
                      >
                        Edit Address
                      </Button>

                      <ShippingModal
                        loading={loading}
                        index={e.id}
                        authUser={authUser}
                        inventoryId={e.id}
                        setLoading={setLoading}
                        referenceNumber={e.referenceNumber}
                      />
                    </td>
                    <td>
                      <Button
                        bg="red"
                        color="white"
                        onClick={() =>
                          document.getElementById("cancel").showModal()
                        }
                      >
                        CANCEL
                      </Button>
                      <CancelModal inventoryId={e.id} setLoading={setLoading} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* {watch in inventory} */}
      {activeData && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Model Name</th>
                <th>Brand</th>
                <th>Reference Number</th>
                <th>Shipping</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {activeData.map((e, i) => {
                return (
                  <tr className="hover cursor-pointer" key={e.id} >
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20" src={e.watch.watchImage} onClick={()=>navigate(`/watch/${e.watch.id}`)}/>
                    </td>
                    <td>{e.watch.modelName}</td>
                    <td>{e.watch.brand.name}</td>
                    <td>{e.referenceNumber}</td>
                    <td>
                      <Button
                        bg="green"
                        color="white"
                        onClick={() =>
                          document.getElementById(`address_${e.id}`).showModal()
                        }
                      >
                        Shipping
                      </Button>
                      <ShippingModal
                        index={e.id}
                        authUser={authUser}
                        inventoryId={e.id}
                        setLoading={setLoading}
                        referenceNumber={e.referenceNumber}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* {my shipping lists} */}
      {shippingData && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Tracking Number</th>
                <th>Reference Number</th>
                <th>Accept</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {shippingData.map((e, i) => {
                return (
                  <tr className="hover" key={e.id} >
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20" src={e.inventory.watchImage} />
                    </td>
                    <td>{e.trackingNumber}</td>
                    <td>{e.inventory.referenceNumber}</td>
                    {/* <td>{e.referenceNumber}</td> */}
                    <td>
                      <Button
                        bg="green"
                        color="white"
                        onClick={() =>
                          document
                            .getElementById(`confirm_shipping_${e.id}`)
                            .showModal()
                        }
                      >
                        Confirm
                      </Button>
                      <ConfirmModal index={e.id} setLoading={setLoading} />
                    </td>
                    <td>
                      <Button
                        bg="red"
                        color="white"
                        onClick={() =>
                          document.getElementById(`cancel_shipping_${e.id}`).showModal()
                        }
                      >
                        Cancel
                      </Button>
                      <CancelShippingModal
                        index={e.id}
                        setLoading={setLoading}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
