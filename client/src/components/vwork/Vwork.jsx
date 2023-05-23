import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "name", width: 250 },
  { field: "full_address", headerName: "full_address", width: 280 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "contact_name", headerName: "contact_name", width: 150 },
  { field: "website", headerName: "website", width: 200 },
  { field: "ratings", headerName: "ratings", width: 70 },
  { field: "labels", headerName: "labels", width: 70 },
  { field: "watchers", headerName: "watchers", width: 70 },
  { field: "contact_email", headerName: "contact_email", width: 180 },
];

const Vwork = ({ title }) => {
  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/vendors";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.vendors);
            setDatas(json.vendors);
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

export default Vwork;
