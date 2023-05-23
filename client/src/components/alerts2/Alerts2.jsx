import React, { useState, useEffect } from "react";
import "./alerts2.scss";
import { MovingOutlined, PanTool, QueryBuilder, Stop } from "@mui/icons-material";
// import axios from "axios";
const Alerts2 = () => {
  const [alerts, setAlerts] = useState([]);
  var baseUrl =
    "https://r14rbqmmxc.execute-api.ap-northeast-1.amazonaws.com/prod/vehiclehistory";

  //   useEffect(() => {
  //     axios.get(`${baseUrl}`).then((res) => {
  //       console.log(res.data);
  //       setAlerts(res.vehicleHistory);
  //     });
  //   }, []);

  //   console.log(alerts);
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
            setAlerts(json.vehicleHistory);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCoin();
  }, [baseUrl]);


  let status = `${alert.Status}`;

  return (
    <div className="alerts2">
      {alerts.map((alert, index) => (
        <div className="alerts2__container" key={index}>
          <div className="alerts2__top">
            <div className="alerts2__topleft">
              {`${alert.Status}` === "Moving" ? (
                <MovingOutlined className="icons" style={{ color: "green" }} />
              ) : `${alert.Status}` === "Idle" ? (
                <QueryBuilder className="icons" style={{ color: "gray" }} />
              ) : `${alert.Status}` === "Stopped" ? (
                <Stop className="icons" style={{ color: "red" }} />
              ) : `${alert.Status}` === "Halted" ? (
                <PanTool className="icons" style={{ color: "rgba(231, 231, 39, 0.852)" }} />
              ) : (
                "not found"
              )}
            </div>
            <div className="alerts2__topright">
              <h4 style={{color : 'black'}}>{alert.Time}</h4>
              {`${alert.Status}` === "Moving" ? (
                <p style={{ color: "darkgreen" , fontSize : '14px' , fontWeight : 'semibold'}}>{alert.Status}</p>
              ) : `${alert.Status}` === "Idle" ? (
                <p style={{ color: "gray", fontSize : '14px' ,fontWeight : 'semibold'}}>{alert.Status}</p>
              ) : `${alert.Status}` === "Stopped" ? (
                <p style={{ color: "red" , fontSize : '14px' , fontWeight : 'semibold'}}>{alert.Status}</p>
              ) : `${alert.Status}` === "Halted" ? (
                <p style={{ color: "rgba(231, 231, 39, 0.852)" , fontSize : '14px' , fontWeight : 'semibold'}}>{alert.Status}</p>
              ) : (
                "not found"
              )}
            </div>
          </div>
          <div className="alerts2__bottom"><h5>{alert.CurrentLocation}</h5></div>
        </div>
      ))}
    </div>
  );
};

export default Alerts2;
