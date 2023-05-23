import React from "react";
import { useEffect, useState } from "react";
import "./ehwork.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../vehicleTableSource";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "evehicle", headerName: "Vehicle", width: 150 },
  { field: "esource", headerName: "Source", width: 120 },
  { field: "etype", headerName: "Type", width: 100 },
  { field: "Date", headerName: "Date", width: 100 },
  { field: "eamount", headerName: "Amount", width: 100 },
  { field: "evendor", headerName: "Vendor", width: 100 },
  { field: "ewatchers", headerName: "Watchers", width: 80 },
];


const Ehwork = ({ title }) => {
  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/expense-entries";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.expenseEntries);
            setDatas(json.expenseEntries);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCoin();
  }, [baseUrl]);

  // const actionColum = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: () => {
  //       return (
  //         <div className="cellAction">
  //           <Link
  //             to="/users/test"
  //             style={{ textDecoration: "none", color: "black" }}
  //           >
  //             <div className="viewButton">View</div>
  //           </Link>
  //           <div className="deleteButton">Delete</div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="datatable">
      {title ? (
        <div className="datatableTitle">
          <div className="">{title}</div>
          <Link to="/users/new" className="link">
            Add New
          </Link>
        </div>
      ) : (
        ""
      )}
      <DataGrid
        className="datagrid"
        rows={datas}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Ehwork;
