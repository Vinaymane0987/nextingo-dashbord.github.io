import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "iuser", headerName: "User", width: 100 },
    { field: "ivehicle", headerName: "vehicle", width: 240 },
    { field: "iinspection_form", headerName: "Inspection_form", width: 230 },
    { field: "iduration", headerName: "Duration", width: 70 },
    { field: "ivehicle_group", headerName: "Vehicle_group", width: 120 },
    { field: "isubmitted", headerName: "Submitted", width: 240 },
    { field: "ifailed_items", headerName: "Failed_items", width: 150 },
    { field: "ilocation_exception", headerName: "Location_exception", width: 70 },
];


const Iwork = ({ title }) => {
  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/inspection-history";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.InspectionHistory);
            setDatas(json.InspectionHistory);
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

export default Iwork;
