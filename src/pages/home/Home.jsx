import React  from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Widget from "../../components/widget/Widget";
import Map from "../../components/map/Map";
import Alerts from "../../components/alets/Alerts";
import car from "../../assests/cat.jpg";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Alerts2 from "../../components/alerts2/Alerts2";
// import LineChart from "../../components/linechart/LineChart";
// import Table from "../../components/table/Table";
// import App from '../../tcontainer/App'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Topbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="home__components">
          <div className="home__car">
            <h2
              style={{
                paddingLeft: "5px",
                borderBottom: "1px solid rgb(196, 196, 196)",
              }}
            >
              Vehicle
            </h2>
            <img src={car} alt="" />
          </div>
          <div className="home__alerts">
            <h2
              style={{
                paddingLeft: "25px",
                borderBottom: "1px solid rgb(196, 196, 196)",
              }}
            >
              Alerts
            </h2>
            {/* <Alerts /> */}
            <Alerts2 />
          </div>
          <div className="home__map" style={{ boxSizing: "border-box" }}>
            <h2
              style={{
                paddingLeft: "5px",
                borderBottom: "1px solid rgb(196, 196, 196)",
              }}
            >
              live Map
            </h2>
            <Map />
          </div>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="last 6 Months (Revenue)" aspect={2.5 / 1} />
        </div>
      </div>
      ``
    </div>
  );
};

export default Home;
