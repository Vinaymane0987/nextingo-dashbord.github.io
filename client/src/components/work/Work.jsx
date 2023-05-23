import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { userColumns } from "../../vehicleTableSource";
import "./work.scss";

const Work = ({ title }) => {
  const [datas, setDatas] = useState([]);
  const baseUrl =
    "https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/vehiclelist";

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
      try {
        const response = await axios.get(baseUrl);
        setDatas(response.data.vehicleList);
        console.log(response.data.vehicleList);
      } catch (err) {
        console.log(err);
      }
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
          <h3>{title}</h3>
          <Link to="/users/new" className="link">
            Add New
          </Link>
        </div>
      ) : null}
      <DataGrid
        className="datagrid"
        rows={datas}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>MODEL</th>
            <th>MAKE</th>
            <th>TYPE</th>
            <th>CURRENT_METER</th>
            <th>OPERATOR</th>
            <th>VIN</th>
            <th>STATUS</th>
            <th>GROUP</th>
            <th>LICENSE PLATE</th>
            <th>WATCHERS</th>
            <th>YEAR</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.vname}</td>
                <td>{item.vmodel}</td>
                <td>{item.vmake}</td>
                <td>{item.vtype}</td>
                <td>{item.current_meter}</td>
                <td>{item.voperator}</td>
                <td>{item.vin}</td>
                <td>{item.vstatus}</td>
                <td>{item.vgroup}</td>
                <td>{item.licenseplate}</td>
                <td>{item.vyear}</td>
                <td>
                  <Link to={`/vehiclelist/${item.id}`}>view</Link>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};

export default Work;
