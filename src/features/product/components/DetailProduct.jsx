import React from "react";
import Title from "../../../components/Title";
import OrderContainer from "./OrderContainer";
import OrderList from "./OrderList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProduct from "../../../hooks/useProduct";
import { useEffect } from "react";
import Description from "./Description";

export default function DetailProduct() {
  const { watchId } = useParams();
  const { getOneWatch, oneWatch } = useProduct();
  const [watch, setWatch] = useState(oneWatch);

  const getData = async () => {
    const data = await getOneWatch(+watchId);
    setWatch(data.data);
  };

  useEffect(() => {
    getData();
  }, [watchId]);
  //   "data": {
  //     "id": 1,
  //     "brandId": 1,
  //     "modelName": "Submariner",
  //     "movement": "AUTOMATIC",
  //     "gender": "UNISEX",
  //     "powerReserve": "50",
  //     "caseMaterial": "Stainless Steel",
  //     "caseDiameter": "40",
  //     "crystal": "Sapphire",
  //     "dial": "Black",
  //     "braceletMaterial": "Stainless Steel",
  //     "braceletColor": "Silver",
  //     "description": "The iconic dive watch from Rolex.",
  //     "watchImage": "https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg",
  //     "createdAt": "2024-03-05T13:25:28.229Z",
  //     "updatedAt": "2024-03-05T13:25:28.229Z"
  //     "brand": "Rolex"
  // }
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-[1200px]  min-h-screen  flex flex-col gap-10 py-12">
        <div className="flex gap-10">
          <div className="flex flex-col items-center w-[600px] justify-center">
            <img
              className="rounded-2xl"
              src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg"
            />
          </div>
          <div className="flex flex-col px-6 gap-10">
            <Title>{watch?.modelName}</Title>
            <Description label="Description">{watch?.description}</Description>
            <div className="grid grid-cols-2 gap-6">
              <Description label="Brand">{watch?.brand}</Description>
              <Description label="Movement">{watch?.movement}</Description>
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
          </div>
        </div>
        <div className="flex justify-evenly  gap-8">
          <OrderContainer id="buy">Buy</OrderContainer>
          <OrderContainer id="sell">Sell</OrderContainer>
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
