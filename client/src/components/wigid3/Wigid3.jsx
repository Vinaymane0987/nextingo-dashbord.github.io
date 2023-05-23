import React from "react";
import "./wigid3.scss";
import { useEffect } from "react";
import { useState } from "react";
const Wigid3 = () => {
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
    <div className="wigid3">
      <div className="parent">
        <div className="div1">
          <h4>Contact Renewal Reminders</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#ea352b" }}>1</h1>
              <p>Overdue</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#f2aa2a" }}>1</h1>
              <p>Due Soon</p>
            </div>
          </div>
        </div>
        <div className="div2">
          <h4>Vehicle Assignments</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#0fb860" }}>2</h1>
              <p>Assigned</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#f2aa2a" }}>4</h1>
              <p>unAssinged</p>
            </div>
          </div>
        </div>
        <div className="div3">
          <h4>vehicle locations</h4>
          <div className="remider__container3">
            {/* <div className="remd1">
            <h1 style={{color :'orange'}}>5</h1>
            <p>Open</p>
          </div>
          <div className="remd1">
            <h1 style={{ color :'blue'}}>0</h1>
            <p>Over due</p>
          </div> */}
            No Results
          </div>
        </div>
        <div className="div4">
          <h4>Time to Resolve</h4>
          <div className="remider__container4">
            {/* <div className="remd1">
            <h1 style={{color :'orange'}}>5</h1>
            <p>Open</p>
          </div>
          <div className="remd1">
            <h1 style={{ color :'blue'}}>0</h1>
            <p>Over due</p>
          </div> */}
            No Results
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wigid3;
