import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart2 = () => {
  let baseURL = "https://r14rbqmmxc.execute-api.ap-northeast-1.amazonaws.com/prod/vehicle";
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${baseURL}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.vehicleData);
            setCharts(json.vehicleData);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [baseURL]);

  const data = [
    {
      name: charts?.map((x) => x.payload.id),
      Total: charts?.map((x) => x.payload.longitude),
    },
  ];
  return (
    <div className="linecharts">
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Total" stroke="red" />
      </LineChart>
    </div>
  );
};

export default LineChart2;
