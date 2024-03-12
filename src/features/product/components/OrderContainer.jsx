import React from "react";
import { baht } from "../../../constants/baht";
import BuyModal from "./BuyModal";
import SellModal from "./SellModal";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import { formatNum } from "../../../utils/formatNumber";

export default function OrderContainer(props) {
  const { children, id, dataBuy, dataSale, watch, setLoading, loading } = props;

  return (
    <div className="border-solid border-2 w-96 border-black text-center px-6 py-4 rounded-2xl">
      {/* header */}
      <div className="text-lg flex flex-col gap-8 items-center">
        {dataBuy?.length > 0 ? (
          <div className="flex gap-2">
            <>
              <span className="font-bold">{dataBuy?.length || 0}</span>
              <span>Order</span>
              <span>At Start On Price</span>
              <span className="font-bold">
                {baht + " " + formatNum(dataBuy[0]?.price) || 0}
              </span>
            </>
          </div>
        ) : (
          <>
          {
            id === 'buy' ? <h1>No Buy Order on This Watch</h1> : null
          }
          </>
        )}
        {dataSale?.length > 0  ? (
          <div className="flex gap-2">
            <span className="font-bold">{dataSale?.length || 0}</span>
            <span>Order</span>
              <span>At Start On Price</span>
            <span className="font-bold">
              {baht + " " + formatNum(dataSale[0]?.price) || 0}
            </span>
          </div>
        ) : (
          <>
          {
            id === 'sell' ? <h1>No Sale Order on This Watch</h1> : null
          }
          </>
          
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
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {dataBuy?.length > 0 && id === "buy"
              ? dataBuy?.map((e, index) => {
                  if (index < 6) {
                    return (
                      <tr key={e.id}>
                        <td>{`${baht} ${formatNum(e.price)}`}</td>
                        <td>1</td>
                      </tr>
                    );
                  }
                })
              : id === "buy" && (
                  <tr>
                    <td className="text-center" colSpan={2}>
                      --- No BuyOrder on This Watch ---
                    </td>
                  </tr>
                )}
            {dataSale?.length > 0 && id === "sell"
              ? dataSale?.map((e, index) => {
                  if (index < 6) {
                    return (
                      <tr key={e.id}>
                        <td>{`${baht} ${formatNum(e.price)}`}</td>
                        <td>1</td>
                      </tr>
                    );
                  }
                })
              : id === "sell" && (
                  <tr>
                    <td className="text-center" colSpan={2}>
                      --- No SaleOrder on This Watch ---
                    </td>
                  </tr>
                )}
          </tbody>
        </table>
      </div>
      {id === "buy" ? (
        <BuyModal
          watch={watch}
          dataBuy={dataBuy}
          setLoading={setLoading}
          loading={loading}
        />
      ) : (
        <SellModal watch={watch} dataSale={dataSale} setLoading={setLoading} />
      )}
    </div>
  );
}
