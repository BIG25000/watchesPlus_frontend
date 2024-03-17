import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

// const data = [
//   { name: "Male", value: 540 },
//   { name: "Female", value: 620 },
//   { name: "Other", value: 210 },
// ];

const RADIAN = Math.PI / 180;
const COLORS = [
  "#4B0082", // Indigo
  "#FF4500", // Orange Red
  "#DAA520", // Golden Rod
  "#FF8C00", // Dark Orange
  "#7FFF00", // Chartreuse
  "#008080", // Teal
  "#000080", // Navy
  "#00008B", // Dark Blue
  "#4B0082", // Indigo
  "#2E8B57", // Sea Green
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BrandTran({ dashboard }) {
  const data = dashboard?.chartBrandTransaction;

  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-md text-black font-medium">
        Brand Transaction
      </strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data?.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
