import React from "react";
import "./wigid4.scss";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useEffect } from "react";
import { useState } from "react";
const Wigid4 = () => {

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
    <div className="wigid4">
      <div className="parent">
        <div className="div1">
          <h4>Equipment status</h4>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(57, 214, 57)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>in-service</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "rgb(57, 214, 57)",
                color :'dark',
                margin :'auto 0px',
                borderRadius: "50%",
              }}
            >
              2
            </div>
          </div>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(226, 61, 61)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>Out-of-service</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "rgb(226, 61, 61)",
                color :'dark',
                borderRadius: "50%",
              }}
            >
              0
            </div>
          </div>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(170, 170, 170)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>Disposed</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "rgb(170, 170, 170)",
                color : 'dark',
                borderRadius: "50%",
              }}
            >
              4
            </div>
          </div>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(219, 219, 73)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>Missing</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "yellow",
                borderRadius: "50%",
              }}
            >
              3
            </div>
          </div>
        </div>
        <div className="div2">
        <h4>Vehicle Status</h4>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(57, 214, 57)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>Active</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "rgb(57, 214, 57)",
                borderRadius: "50%",
              }}
            >
              2
            </div>
          </div>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(91, 91, 233)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>inactive</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "rgb(91, 91, 233)",
                borderRadius: "50%",
              }}
            >
              0
            </div>
          </div>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(230, 203, 50)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>in shop</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "rgb(230, 203, 50)",
                borderRadius: "50%",
              }}
            >
              4
            </div>
          </div>
          <div className="div1__list">
            <div className="div1-service">
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgb(226, 61, 61)",
                  borderRadius: "50%",
                }}
              ></div>
              <span>out of Service</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                backgroundColor: "rgb(226, 61, 61)",
                borderRadius: "50%",
              }}
            >
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wigid4;
