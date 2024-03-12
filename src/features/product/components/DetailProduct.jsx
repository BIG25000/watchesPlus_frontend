import React from "react";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import OrderContainer from "./OrderContainer";
import OrderList from "./OrderList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProduct from "../../../hooks/useProduct";
import { useEffect } from "react";
import Description from "./Description";
import AddWatchModal from "./AddWatchModal";

export default function DetailProduct() {
  const { watchId } = useParams();
  const {
    getOneWatch,
    oneWatch,
    getAllOrderOnTransaction,
    getAllHistoryByWatchId,
  } = useProduct();
  const [watch, setWatch] = useState(oneWatch);
  const [allBuyOrder, setAllBuyOrder] = useState([]);
  const [allSaleOrder, setAllSaleOrder] = useState([]);
  const [allHistory, setAllHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const data = await getOneWatch(+watchId);
    const orders = await getAllOrderOnTransaction(+watchId);
    const history = await getAllHistoryByWatchId(+watchId);
    setWatch(data?.data);
    setAllBuyOrder(orders.AllBuyOrder);
    setAllSaleOrder(orders.AllSaleOrder);
    setAllHistory(history.data);
  };

  useEffect(() => {
    getData();
  }, [loading]);



  return (
    <div  className="mx-auto w-[1200px]  min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          {watch && allBuyOrder && allSaleOrder ? (
            <div className="flex flex-col gap-10 py-12">
              <div className="flex gap-10">
                <div className="flex flex-col items-center w-[600px] justify-center">
                  <img
                    className="rounded-2xl"
                    src={watch?.watchImage}
                  />
                </div>
                <div className="flex flex-col px-6 gap-10 ">
                  <Title>{watch?.modelName}</Title>
                  <Description label="Description">
                    {watch?.description}
                  </Description>
                  <div className="grid grid-cols-2 gap-6">
                    <Description label="Brand">{watch?.brand}</Description>
                    <Description label="Movement">
                      {watch?.movement}
                    </Description>
                    <Description label="Gender">{watch?.gender}</Description>
                    <Description label="Power Reserve">
                      {watch?.powerReserve}
                    </Description>
                    <Description label="Case Material">
                      {watch?.caseMaterial}
                    </Description>
                    <Description label="Case Diameter">
                      {watch?.caseDiameter}
                    </Description>
                    <Description label="Crystal">{watch?.crystal}</Description>
                    <Description label="Dial">{watch?.dial}</Description>
                    <Description label="Bracelet Material">
                      {watch?.braceletMaterial}
                    </Description>
                    <Description label="Bracelet Color">
                      {watch?.braceletColor}
                    </Description>
                  </div>
                  <Button
                    bg="green"
                    color="white"
                    className="mx-4"
                    onClick={() => document.getElementById("add").showModal()}
                  >
                    Add Product To Inventory
                  </Button>
                </div>
              </div>
              <div className="flex justify-evenly  gap-8">
                <OrderContainer
                  id="buy"
                  dataBuy={allBuyOrder}
                  watch={watch}
                  setLoading={setLoading}
                  loading={loading}
                >
                  Buy
                </OrderContainer>
                <OrderContainer
                  id="sell"
                  dataSale={allSaleOrder}
                  watch={watch}
                  setLoading={setLoading}
                  loading={loading}
                >
                  Sell
                </OrderContainer>
              </div>
              <div className="flex flex-col gap-4">
                <Title>History</Title>
                <>
                  {allHistory?.map((e,i) => {
                    return <OrderList key={i} data={e} type={e.type} watch={watch} />;
                  })}
                </>
              </div>
            </div>
          ) : null}
        </>
      )}
      {/* modal add product */}
      <AddWatchModal watch={watch} setLoading={setLoading} loading={loading} />
    </div>
  );
}
