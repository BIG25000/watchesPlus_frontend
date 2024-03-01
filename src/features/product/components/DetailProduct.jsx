import React from "react";
import Title from "../../../components/Title";
import OrderContainer from "../../../components/OrderContainer";
import OrderList from "../../../components/OrderList";

export default function DetailProduct() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-[1200px]  min-h-screen  flex flex-col gap-10 py-12 ">
        <div className="flex gap-10">
          <div className="flex flex-col items-center justify-center">
            <img src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg" />
          </div>
          <div className="flex flex-col px-6 gap-10">
            <Title>Omega Speedmaster Professional Moonwatch</Title>
            <p>
              in aliquam sem fringilla ut morbi tincidunt augue interdum velit
              euismod in pellentesque massa placerat duis ultricies lacus sed
              turpis
            </p>
            <div className="flex  gap-8">
              <OrderContainer id="buy">Buy</OrderContainer>
              <OrderContainer id="sell">Sell</OrderContainer>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Title>History</Title>
          <div>
            <OrderList />
            <OrderList />
            <OrderList />
          </div>
        </div>
      </div>
    </div>
  );
}
