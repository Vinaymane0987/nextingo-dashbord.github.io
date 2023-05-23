import React from "react";
import "./equipment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Topbar1 from "../../components/topbar1/Topbar1";
import PaginationList from "../../components/pagination/PaginationList";
import Ework from "../../components/ework/Ework";
const Equipment = () => {
  return (
    <div className="equipment">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Topbar1 title="Equipment" title2='equipment' title3='equipmentform'/>
        <PaginationList tablecomponent={<Ework />} />
      </div>
    </div>
  );
};

export default Equipment;
