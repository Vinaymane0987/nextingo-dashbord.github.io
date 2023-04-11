import React, { useEffect, useState } from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2500 },
  { name: "March", Total: 1600 },
  { name: "April", Total: 1800 },
  { name: "May", Total: 1400 },
  { name: "June", Total: 2800 },
];
const Chart = ({ aspect, title }) => {
  // let baseURL = "https://dummyjson.com/products";
  // const [charts, setCharts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch(`${baseURL}`, {
  //       method: "GET",
  //       mode: "cors",
  //     })
  //       .then((response) => {
  //         response.json().then((json) => {
  //           console.log(json);
  //           console.log(json.products);
  //           setCharts(json.products);
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   fetchData();
  // }, [baseURL]);

  // const data = [
  //   {
  //     Total: charts?.map((x) => x.id),
  //     name: charts?.map((x) => x.stock),
  //   },
  // ];
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
