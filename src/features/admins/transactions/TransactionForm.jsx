import React from "react";
import VerifyForm from "./VerifyForm";
import Modal from "../../../components/admins/Modal";
import inventoryAdmin from "./hooks/inventoryAdmin";
import FailverifyForm from "./FailverifyForm";
import { useNavigate } from "react-router-dom";

function TransactionForm() {
  const { inventorys } = inventoryAdmin();
  const navigate = useNavigate();
  console.log(inventorys, "in---------------------");
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
                  <th>Brand</th>
                  <th>Model</th>
                  <th>DateCreate</th>
                  <th>status</th>
                  <th>buttonVerify</th>
                </tr>
              </thead>
              <tbody>
                {inventorys.map((el) => (
                  <tr>
                    <th>{el.id}</th>
                    <td
                      onClick={() => navigate(`/admin/users/${el.user.id}`)}
                      role="button"
                    >
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div
                            className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                            style={{
                              backgroundImage: `url(${el.user?.profileImage})`,
                            }}
                          ></div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {el.user?.firstName} {el.user?.lastName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{el.watch?.brand?.name}</td>
                    <td>{el.watch?.modelName}</td>
                    <td>{el.createdAt?.slice(0, 10)}</td>
                    <td>{el.status}</td>
                    <td className="flex gap-3">
                      <Modal
                        title="verify"
                        // id={`editBrand${el.id}`}
                        id={`verify${el.id}`}
                        button="btn btn-sm bg-gray-400 text-black"
                      >
                        <VerifyForm id={el.id} />
                      </Modal>
                      <Modal
                        title="cancle verify"
                        // id={`editBrand${el.id}`}
                        id={`failverify${el.id}`}
                        button="btn btn-sm bg-gray-400 text-black"
                      >
                        <FailverifyForm id={el.id} />
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionForm;
