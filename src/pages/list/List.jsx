import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Datatable from "../../components/datatable/Datatable";
import "./list.scss";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
