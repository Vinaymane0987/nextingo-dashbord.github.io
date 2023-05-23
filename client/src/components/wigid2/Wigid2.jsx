import React, { useEffect, useState } from "react";
import "./wigid2.scss";
import Chart2 from "../../barcharts/chart2/Chart2";
const Wigid2 = () => {


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

  return (
    <div className="wigid2">
      <div className="parent">
        <div className="div1">
          <h4>Service Reminders</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#ea352b" }}>2</h1>
              <p>Overdue</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#f2aa2a" }}>3</h1>
              <p>Due Soon</p>
            </div>
          </div>
        </div>
        <div className="div2">
          <h4>Vehicle Renewal Reminders</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#ea352b" }}>1</h1>
              <p>Overdue</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#f2aa2a" }}>4</h1>
              <p>Due Soon</p>
            </div>
          </div>
        </div>
        <div className="div3">
          <h4>Open issue</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#f2aa2a" }}>5</h1>
              <p>Open</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#007fd0" }}>0</h1>
              <p>Over due</p>
            </div>
          </div>
        </div>
        <div className="div4">
          <h4>Time to Resolve</h4>
          <div className="div4__chart">
            <Chart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wigid2;
