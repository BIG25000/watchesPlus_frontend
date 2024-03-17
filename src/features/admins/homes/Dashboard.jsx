import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import dashboardAdmin from "./hooks/dashboardAdmin";
import BrandChart from "./BrandChart";
import TransactionChart from "./TransactionChart";
import BrandTran from "./BrandTran";
import { Hexagon } from "lucide-react";
import { Watch } from "lucide-react";
import { Banknote } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";

export default function Dashboard() {
  const { dashboard } = dashboardAdmin();

  // console.log(dashboard);

  return (
    <>
      <div className="flex gap-4">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-800 text-white">
            <Hexagon />
          </div>
          <div className="pl-4">
            <span className="text-md text-black font-medium">Total Brand</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {dashboard?.sumBrand?.[0].sumBrand}
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-900 text-white">
            <Watch />
          </div>
          <div className="pl-4">
            <span className="text-md text-black font-medium">
              Total Watches
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {dashboard?.sumWatches?.[0].sumWatches}
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-600">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-md text-black font-medium">Total User</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {dashboard?.sumUser?.[0].sumUser}
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-700 text-white">
            <Banknote />
          </div>
          <div className="pl-4">
            <span className="text-md text-black font-medium">Total Amount</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {dashboard?.totalWallet?.[0].totalWallet}
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-600 text-white">
            <ArrowLeftRight />
          </div>
          <div className="pl-4">
            <span className="text-md text-black font-medium">
              Total transaction
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {dashboard?.totalTransaction?.[0].totalTransaction}
              </strong>
            </div>
          </div>
        </BoxWrapper>
      </div>
      <div className="flex flex-row gap-4 w-full mt-5">
        <BrandChart dashboard={dashboard} />
        <BrandTran dashboard={dashboard} />
        <TransactionChart dashboard={dashboard} />
      </div>
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
