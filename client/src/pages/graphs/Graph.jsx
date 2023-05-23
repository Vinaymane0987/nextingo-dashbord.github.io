import React from "react";
import "./graph.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Chart1 from "../../container/chart1/Chart1";
import Chart2 from "../../container/chart2/Chart2";
import Chart3 from "../../container/chart3/Chart3";
import Chart4 from "../../container/chart4/Chart4";
import Chart5 from "../../container/chart5/Chart5";
import Chart6 from "../../container/chart6/Chart6";
import Chart7 from "../../container/chart7/Chart7";
const Graph = () => {
  return (
    <div className="graph">
      <Sidebar/>
      <div className="graphContainer">
        <Topbar />
        <div className="listContainer">
          <div className="listTitle">All Graphs</div>
          <Chart1 title="logitude" />
          <Chart2 title="latitude" />
          <Chart3 title="Accelerometer-X" />
          <Chart4 title="Accelerometer-Y" />
          <Chart5 title="Accelerometer-Z" />
          <Chart6 title="Gyroscope-X" />
          <Chart7 title="Gyroscope-Y" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
