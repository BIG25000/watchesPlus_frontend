import React from "react";
import Modal from "../../../components/admins/Modal";
import VerifyForm from "../transactions/VerifyForm";
import AddTrackingForm from "./AddTrackingForm";

function ShipingForm() {
  return (
    <div>
      <strong className="text-gray-700 font-medium">Shipping</strong>
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
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div
                        className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url("https://source.unsplash.com/80x80?face")`,
                        }}
                      ></div>
                    </div>
                    <div>
                      <div className="font-bold">Pongsatorn Sudsom</div>
                      <div className="text-sm opacity-50">BIG</div>
                    </div>
                  </div>
                </td>
                <td>2080/331</td>
                <td>ROLEX</td>
                <td>2080/331</td>
                <td>PENDING</td>
                <td>-</td>
                <td>
                  <Modal
                    title="add tracking"
                    // id={`editBrand${el.id}`}
                    id="add tracking"
                    button="btn btn-sm bg-gray-400 text-black"
                  >
                    <AddTrackingForm />
                  </Modal>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShipingForm;
