import React from "react";
import Avatar from "../../../components/Avatar";
import { baht } from "../../../constants/baht";
import { formatNum } from '../../../utils/formatNumber'

export default function OrderList(props) {
  const { data, type, watch } = props;

  return (
    <>
      {data.type === "TRANSFER" && (
        <div className="flex items-center h-16 px-4 gap-12 border-b-2 hover:bg-gray-200">
          <div className="flex items-center gap-4">
            <img className="w-10 rounded-full" src={data?.fromWallet?.user?.profileImage} />
            <span className="font-bold">
              {data?.fromWallet?.user?.firstName}
            </span>
          </div>
          <div>Purchased This Watch From</div>
          <div className="flex items-center gap-4">
            <img className="w-10 rounded-full" src={data?.toWallet?.user?.profileImage} />
            <span className="font-bold">{data?.toWallet?.user?.firstName}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>for</span>
            <span>{baht + " " + formatNum(data?.price)}</span>
          </div>
        </div>
      )}
      {data.type === "PLACED" && (
        <div className="flex items-center h-16 px-4 gap-12 border-b-2 hover:bg-gray-200">
          <div className="flex items-center gap-4">
            <img className="w-10 rounded-full" src={data?.fromWallet?.user?.profileImage} />
            <span className="font-bold">
              {data?.fromWallet?.user?.firstName}
            </span>
          </div>
          <div>Placed Order on This Watch On</div>
          <div className="flex items-center gap-4">
            <img className="w-10" src={watch?.watchImage} />
          </div>
          <div className="flex items-center gap-4">
            <span>for</span>
            <span>{baht + " " + formatNum(data?.price)}</span>
          </div>
        </div>
      )}
    </>
  );
}
