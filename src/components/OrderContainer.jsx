import React from "react";
import { baht } from "../constants/baht";
import BuyModal from "./BuyModal";
import SellModal from "./SellModal";

export default function OrderContainer(props) {
    const { children , id } = props
  return (
    <div className="border-solid border-2 border-black text-center px-6 py-4 " >
      {/* header */}
      <div className="text-lg flex flex-col gap-8 items-center">
        <div className="flex gap-2">
          <span className="font-bold">31592</span>
          <span>รายการขาย</span>
          <span>เริ่มต้น</span>
          <span className="font-bold">{baht + "235.98"}</span>
        </div>
        <button className="btn btn-success w-48 text-2xl " onClick={()=>document.getElementById(id).showModal()}>{children}...</button>
      </div>
      {/* body */}
      <div>
        <table className="table table-zebra">
          <thead >
            <tr>
              <th>ราคา</th>
              <th>จำนวน</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{baht}235.98</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{baht}235.98</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{baht}235.98</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{baht}235.98</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <BuyModal/>
      <SellModal/>
    </div>
  );
}
