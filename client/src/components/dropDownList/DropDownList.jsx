import React from "react";
import "./style.scss";
import { Search } from "@mui/icons-material";
import Drop from "../drop/Drop";
import TablePagination from "@mui/material/TablePagination";
const DropDownList = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="dropdownlist">
      <div className="dropdownlist-left">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="dropdown-container">
          <Drop title="Vehicle Type" />
          <Drop title="Vehicle Group" />
          <Drop title="Vehicle Status" />
          <Drop title="Watcher" />
        </div>
      </div>
      <div className="dropdownlist-right">
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default DropDownList;
