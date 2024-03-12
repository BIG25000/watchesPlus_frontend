import React from "react";
import Avatar from "../../../components/Avatar";
import { baht } from "../../../constants/baht";
import React from "react";
import Avatar from "../../../components/Avatar";
import { baht } from "../../../constants/baht";

export default function OrderList(props) {
  const { data, type , watch } = props;

  return (
    <>
      {data.type === "TRANSFER" && (
        <div className="flex items-center h-16 px-4 gap-6 border-b-2">
          <div className="flex items-center gap-4">
            <Avatar src={data?.fromWallet?.user?.profileImage} />
            <span className="font-bold">{data?.fromWallet?.user?.firstName}</span>
          </div>
          <div>Purchased This Watch From</div>
          <div className="flex items-center gap-4">
            <Avatar src={data?.toWallet?.user?.profileImage} />
            <span className="font-bold">{data?.toWallet?.user?.firstName}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>for</span>
            <span>{baht + " " + data?.price}</span>
          </div>
        </div>
      )}
      {data.type === "PLACED" && (
        <div className="flex items-center h-16 px-4 gap-6 border-b-2">
          <div className="flex items-center gap-4">
            <Avatar src={data?.fromWallet?.user?.profileImage} />
            <span className="font-bold">{data?.fromWallet?.user?.firstName}</span>
          </div>
          <div>Placed Order on This Watch On</div>
          <div className="flex items-center gap-4">
            <Avatar src={watch?.watchImage} />
          </div>
          <div className="flex items-center gap-4">
            <span>for</span>
            <span>{baht + " " + data?.price}</span>
          </div>
        </div>
      )}
    </>
  );
}
