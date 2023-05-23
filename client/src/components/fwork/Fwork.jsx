import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../vehicleTableSource";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fvehicle", headerName: "fvehicle", width: 280 },
  { field: "fvendors", headerName: "fvendors", width: 280 },
  { field: "fcost_per_meter", headerName: "fcost_per_meter", width: 100 },
  { field: "fuel_fconomy", headerName: "fuel_fconomy", width: 100 },
  { field: "fusage", headerName: "fusage", width: 100 },
  { field: "per_litre", headerName: "per_litre", width: 100 },
  { field: "fdate", headerName: "fdate", width: 100 },
  { field: "fmeter_entry", headerName: "fmeter_entry", width: 100 },
  { field: "ftotal", headerName: "ftotal", width: 100 },
  { field: "fvolume", headerName: "fvolume", width: 100 },
  { field: "falerts", headerName: "falerts", width: 100 },
  { field: "ftime", headerName: "ftime", width: 100 },
];


const Fweork = ({ title }) => {
  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/fuel-history";

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.fuel_histories);
            setDatas(json.fuel_histories);
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

export default Fweork;
