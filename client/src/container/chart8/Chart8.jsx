import React, { useState } from "react";
import "./chart8.scss";

const Chart8 = () => {
  const [series, setSeries] = useState({
    series: [
      {
        data: [30, 40, 60, 80, 100, 120],
      },
    ],
  });

  const [options, setOptions] = useState({
    options: {
      chart: {
        id: "apex chart example",
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006],
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Chart8;
