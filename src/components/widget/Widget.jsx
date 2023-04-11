import React from "react";
import "./widget.scss";
import {
  KeyboardArrowUpOutlined,
  // AccountBalanceWalletOutlined,
  // ShoppingCartOutlined,
  // MonetizationOnOutlined,
  // Person2Outlined,
  LocalShipping,
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;
  let amount = 100;
  let diff = 20;
  switch (type) {
    case "users":
      data = {
        title: "VEHICLES",
        isMoney: false,
        amount2 : '80',
        link: "See all vehicles",
        icon: (
          <LocalShipping 
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.352)",
              borderRadius: "5px",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ASSIGNED VEHICLES",
        isMoney: false,
        amount2 : '60',
        link: "View all assigned vehicles",
        icon: <LocalShipping className="icon" 
                        style={{
              color: "golden",
              backgroundColor: " rgba(255, 255, 0, 0.385)",
              borderRadius: "5px",
            }}
        />,
      };
      break;
    case "earnings":
      data = {
        title: "FREE VEHICLES",
        isMoney: true,
        amount2 : '40',
        link: "view all free vehicles",
        icon: <LocalShipping className="icon" 
                        style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.314)",
              borderRadius: "5px",
            }}
        />,
      };
      break;
    case "balance":
      data = {
        title: "MOVING VEHICLES",
        isMoney: true,
        amount2 : '20',
        link: "See all moving vehicles",
        icon: <LocalShipping className="icon" 
                        style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.336)",
              borderRadius: "5px",
            }}
        />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="widget__left">
        <div className="users">{data.title}</div>
        <div className="profit">
          {data.amount2}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="widget__right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlined />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
