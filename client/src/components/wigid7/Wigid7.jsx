import React from 'react'
import './wigid7.scss'
import Chart2 from '../../barcharts/chart2/Chart2'
import { useEffect } from 'react';
import { useState } from 'react';
const Wigid7 = () => {

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
    <div className="wigid7">
      <div className="parent">
        <div className="div1">
          <h4>On Time Service Complaince</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#ea352b" , fontSize :'28px' }}>44%</h1>
              <p>All Time</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#f2aa2a" , fontSize :'28px' }}>67%</h1>
              <p>Last 30 Days</p>
            </div>
          </div>
        </div>
        <div className="div2">
          <h4>Overdue Inspection</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#007fd0" , fontSize :'28px' }}>0</h1>
              <p>Overdue</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#007fd0" , fontSize :'28px' }}>0%</h1>
              <p>of Total due</p>
            </div>
          </div>
        </div>
        <div className="div3">
          <h4>Inspection item failure</h4>
          <div className="remider__container">
            <div className="remd1">
              <h1 style={{ color: "#007fd0" , fontSize :'28px' }}>3%</h1>
              <p>This Week</p>
            </div>
            <div className="remd1">
              <h1 style={{ color: "#ea352b" , fontSize :'28px' }}>3%</h1>
              <p>Change from last Week</p>
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
  )
}

export default Wigid7