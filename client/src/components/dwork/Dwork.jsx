import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fileName", headerName: "fileName", width: 250 },
  { field: "fileSize", headerName: "fileSize", width: 250 },
  { field: "labels", headerName: "labels", width: 250 },
  { field: "attachedTo", headerName: "attachedTo", width: 250 },
  { field: "Location", headerName: "Location", width: 250 },

];

const Dwork = ({ title }) => {
  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/documents";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.documents);
            setDatas(json.documents);
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

export default Dwork;
