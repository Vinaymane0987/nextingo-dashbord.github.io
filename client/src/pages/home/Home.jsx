import React from "react";
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
import Management from "../../components/management/Management";
import Wigid2 from "../../components/wigid2/Wigid2";
import Wigid3 from "../../components/wigid3/Wigid3";
import Wigid4 from "../../components/wigid4/Wigid4";
import Wigid5 from "../../components/wigid5/Wigid5";
import Wigid6 from "../../components/wigid6/Wigid6";
import Wigid7 from "../../components/wigid7/Wigid7";
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

        {/* <div className="home__components">
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
        </div> */}

        {/* <div className="charts">
          <Featured />
          <Chart title="last 6 Months (Revenue)" aspect={2.5 / 1} />
        </div> */}

        <div className="home__map">
          <Map className="map__container" />
        </div>

        <div className="home__components">
          <div className="home__car">
            <h4 style={{ padding: " 5px 10px 0 10px" }}>Vehicle</h4>
            <img src={car} alt="" />
          </div>
          <div className="home__alerts">
            <h4 style={{ padding: " 5px 10px 0 10px" }}>Alerts</h4>
            <Alerts2 />
          </div>
        </div>

        <div className="home__management">
          <Management />
          <Wigid2 />
        </div>

        <div className="home__wigid3">
          <Wigid3 />
          <Wigid4 />
        </div>

        <div className="home__wigid5">
          <Wigid5 />
          <Wigid6 />
        </div>

        <div className="home__wigid7">
          <Wigid7 />
          <Wigid7 />
        </div>

      </div>
      ``
    </div>
  );
};

export default Home;
