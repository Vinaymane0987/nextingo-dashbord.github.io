import React from "react";
import "./vehicleList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Topbar1 from "../../components/topbar1/Topbar1";
import PaginationList from "../../components/pagination/PaginationList";
import Work from "../../components/work/Work";
import Work2 from "../../components/work2/Work2";

const VehicleList = () => {
  return (
    <div className="vehiclelist">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Topbar1 title="Vehicle" title2='vehiclelist' title3="vehiclelsitform" />
        <PaginationList tablecomponent={<Work />} tablecomponent2={<Work2 />}/>
      </div>
    </div>
  );
};

export default VehicleList;
