import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function TransactionChart({ dashboard }) {
  console.log(dashboard.chartTransaction);

  const data = dashboard?.chartTransaction?.map((el) => ({
    name: el.name.slice(0, 10),
    sumprice: +el.sumprice,
  }));

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-md text-black font-medium">
        Transactions(THB)/Day
      </strong>
      <div className="mt-3 w-full flex-1 text-xs text-md text-black font-medium">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sumprice" fill="#006400" />
            {/* <Bar dataKey="Expense" fill="#ea580c" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
