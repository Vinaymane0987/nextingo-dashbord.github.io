import React from "react";
import "./chart2.scss";
import { Bar } from "react-chartjs-2";

const Chart2 = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Vehicle Availability",
        data: [65, 59, 80, 81],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 205, 86, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart2">
      <div className="chartBox">
        <Bar data={data} className="barChart"  />
      </div>
    </div>
  );
};

export default Chart2;
