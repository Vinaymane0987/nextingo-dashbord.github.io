import React from "react";
import { useEffect, useState } from "react";
import "./ework.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../vehicleTableSource";
import axios from "axios";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "ename", headerName: "Name", width: 120 },
  { field: "evehicle_operator", headerName: "vehicle_operator", width: 120 },
  { field: "etype", headerName: "Type", width: 100 },
  { field: "elinked_vehicles", headerName: "linked_vehicles", width: 130 },
  { field: "serialnumber", headerName: "Serial Number", width: 80 },
  { field: "eopen_issues", headerName: "open_issues", width: 80 },
  { field: "ecurrent_assignee", headerName: "ecurrent_assignee", width: 80 },
  { field: "elabels", headerName: "Labels", width: 80 },
  { field: "estatus", headerName: "Status", width: 80 },
  { field: "ebrand", headerName: "Brand", width: 80 },
  { field: "egroup", headerName: "Group", width: 80 },
  { field: "ewatchers", headerName: "Watchers", width: 80 },
];


const Ework = ({ title }) => {
  const [datas, setDatas] = useState([]);
  var baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/equipment";

    const deleteFormData = async (id) => {
      const confirm = window.confirm("Would you like to delete?");
      if (confirm) {
        await axios
          .delete(`${baseUrl}/` + id, {
            hardDelete: true,
          })
          .catch((error) => {
            console.log(error.message);
          });
        // Remove the deleted row from the state
        setDatas((prevDatas) => prevDatas.filter((data) => data.id !== id));
      }
    };
  

  useEffect(() => {
    const fetchCoin = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            console.log(json.Equipment);
            setDatas(json.Equipment);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCoin();
  }, [baseUrl]);

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link
            to={`/vehiclelist/${params.row.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="viewButton">update</div>
          </Link>
          <div>
            <button
              className="deleteButton"
              onClick={(e) => deleteFormData(params.row.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    },
  };
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
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Ework;
