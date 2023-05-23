import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "reported_date", headerName: "reported_date", width: 70 },
  { field: "asset_record_type", headerName: "asset_record_type", width: 70 },
  { field: "summary", headerName: "summary", width: 70 },
  { field: "labels", headerName: "labels", width: 70 },
  { field: "assigned", headerName: "assigned", width: 70 },
  { field: "asset_name", headerName: "asset_name", width: 70 },
  { field: "issue", headerName: "issue", width: 70 },
  { field: "watchers", headerName: "watchers", width: 70 },
  { field: "issue_status", headerName: "issue_status", width: 70 },
  { field: "isource", headerName: "isource", width: 70 },

];

const IssueWork = ({ title }) => {
  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/issues";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.issues);
            setDatas(json.issues);
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

export default IssueWork;
