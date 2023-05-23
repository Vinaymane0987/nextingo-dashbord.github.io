import React from 'react'
import './report.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Chart1 from '../../barcharts/chart1/Chart1';
const Report = () => {
  return (
    <div className="report">
       <Sidebar />
      <div className="listContainer">
        <Topbar />

        <div className="listContainer__bar">
          <Chart1 />
          <Chart1 />
          <Chart1 />
          <Chart1 />
        </div>
      </div>
    </div>
  )
}

export default Report