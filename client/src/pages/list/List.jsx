import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Datatable from "../../components/datatable/Datatable";
import "./list.scss";
import Work from "../../components/work/Work";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        {/* <Datatable /> */}
        <Work title='All work Orders'/>
      </div>
    </div>
  );
};

export default List;
