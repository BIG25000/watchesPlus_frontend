import React from "react";
import { baht } from "../../../constants/baht";
import BuyModal from "./BuyModal";
import SellModal from "./SellModal";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";

export default function OrderContainer(props) {
  const { children, id, dataBuy, dataSale , watch , setLoading , loading } = props;

  return (
    <div className="border-solid border-2 w-96 border-black text-center px-6 py-4 rounded-2xl">
      {/* header */}
      <div className="text-lg flex flex-col gap-8 items-center">
        {dataBuy?.length > 0 && (
          <div className="flex gap-2">
            <span className="font-bold">{dataBuy?.length}</span>
            <span>รายการขาย</span>
            <span>เริ่มต้น</span>
            <span className="font-bold">{baht + dataBuy[0]?.price}</span>
          </div>
        )}
        {dataSale?.length > 0 && (
          <div className="flex gap-2">
            <span className="font-bold">{dataSale?.length}</span>
            <span>รายการขาย</span>
            <span>เริ่มต้น</span>
            <span className="font-bold">{baht + dataSale[0]?.price}</span>
          </div>
        )}
        <Button
          onClick={() => document.getElementById(id).showModal()}
          bg="green"
          color="white"
          width="48"
        >
          {children}...
        </Button>
      </div>
      {/* body */}
      <div>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>ราคา</th>
              <th>จำนวน</th>
            </tr>
          </thead>
          <tbody>
            {dataBuy?.length > 0 && id === 'buy' ? dataBuy?.map((e,index) => {
              if(index < 6){
                return (
                  <tr key={e.id}>
                    <td>{`${baht} ${e.price}`}</td>
                    <td>1</td>
                  </tr>
                );
              }
            }) : id === 'buy' && <tr><td className="text-center" colSpan={2}>--- No BuyOrder on This Watch ---</td></tr>}
            {dataSale?.length > 0 && id ==='sell' ? dataSale?.map((e,index) => {
               if(index < 6){
                return (
                  <tr key={e.id}>
                    <td>{`${baht} ${e.price}`}</td>
                    <td>1</td>
                  </tr>
                );
              }
            }) : id === 'sell' && <tr><td className="text-center" colSpan={2}>--- No SaleOrder on This Watch ---</td></tr>}
          
          </tbody>
        </table>
      </div>
      {id === 'buy' ? <BuyModal  watch={watch} dataBuy={dataBuy} setLoading={setLoading} loading={loading}/> : <SellModal watch={watch} dataSale={dataSale} setLoading={setLoading}  />  }
      
    </div>
  );
}
