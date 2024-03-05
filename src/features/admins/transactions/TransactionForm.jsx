import React from "react";
import VerifyForm from "./VerifyForm";
import Modal from "../../../components/admins/Modal";

function TransactionForm() {
  return (
    <div>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Inventory</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <div className="overflow-x-auto">
            <table className="table w-full ">
              {/* head */}
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th>id</th>
                  <th>User</th>
                  <th>watch_id</th>
                  <th>DateCreate</th>
                  <th>status</th>
                  <th>buttonVerify</th>
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
                  <td>ROLEX</td>
                  <td>20/12/2024</td>
                  <td>PENDING</td>
                  <td className="flex gap-3">
                    <Modal
                      title="verify"
                      // id={`editBrand${el.id}`}
                      id="verify"
                      button="btn btn-sm bg-gray-400 text-black"
                    >
                      <VerifyForm />
                    </Modal>
                    <button className="btn btn-sm bg-gray-400 text-black">
                      cancal
                    </button>
                  </td>
                </tr>

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
    </div>
  );
}

export default TransactionForm;
