import React from "react";
import "./ehistory.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Topbar1 from "../../components/topbar1/Topbar1";
import PaginationList from "../../components/pagination/PaginationList";
import Ehwork from "../../components/eHWork/Ehwork";
const Ehistory = () => {
  return (
    <div className="equipment">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Topbar1 title="Expense history" title2='ehistory' title3='ehistoryform'/>
        <PaginationList tablecomponent={<Ehwork />} />
      </div>
    </div>
  );
};

export default Ehistory;
