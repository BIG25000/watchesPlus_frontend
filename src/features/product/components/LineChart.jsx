import React from "react";
import Chart from "chart.js/auto";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import moment from "moment";
import Loading from "../../../components/Loading";
import { useEffect } from "react";

Chart.register(CategoryScale);

export default function LineChart(props) {
  const { data, loading } = props;

  const [newData, setNewData] = useState(data);
  const [chartData, setChartData] = useState({
    labels: newData?.map((data) => moment(data.createdAt).format("MMM Do YY")),
    datasets: [
      {
        label: "Price Sold ",
        data: newData?.map((data) => data.price),
        backgroundColor: ["green"],
        borderColor: "green",
        borderWidth: 4,
      },
    ],
  });

  useEffect(() => {
    setNewData(data);
  }, [loading]);

  return (
    <>
      {newData.length > 0 ? (
        <div className="chart-container">
          <h2 className="text-center text-2xl">Price History</h2>
          <Line
            data={chartData}
            options={{
              layout: {
                padding: 20,
              },
              plugins: {
                title: {
                  display: true,
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
