import React from "react";
import "./wigid5.scss";
import Chart2 from "../../barcharts/chart2/Chart2";
import { useEffect } from "react";
import { useState } from "react";
const Wigid5 = () => {

  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://r14rbqmmxc.execute-api.ap-northeast-1.amazonaws.com/prod/vehiclehistory";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.vehicleHistory);
            setDatas(json.vehicleHistory);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCoin();
  }, [baseUrl]);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = [65, 59, 80, 81, 56, 55, 40, 65, 78];
  return (
    <div className="wigid5">
      <div className="parent">
        <div className="div1">
          <h4>Fuel Cost</h4>
          <div className="service__chart">
            <Chart2 />
          </div>
        </div>
        <div className="div2">
          <h4>Service cost</h4>
          <div className="service__chart">
            <Chart2 />
          </div>
        </div>
        <div className="div3">
          <h4>Other Cost</h4>
          <div className="service__chart">
            <Chart2 />
          </div>
        </div>
        <div className="div4">
          <h4>Total Cost</h4>
          <div className="service__chart">
            <Chart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wigid5;
