import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Equipmentform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    ename: "",
    etype: "",
    evehicle_operator: "",
    serialnumber: "",
    elinked_vehicles: "",
    eopen_issues: "",
    ecurrent_assignee: "",
    estatus: "",
    elables : '',
    ebrand: "",
    egroup: "",
    ewatchers : '',
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // vmake a POST request to the API
      const response = await axios.post(baseUrl, {
        ename: formValues.ename,
        etype: formValues.etype,
        evehicle_operator: formValues.evehicle_operator,
        serialnumber: parseInt(formValues.serialnumber),
        elinked_vehicles: parseInt(formValues.elinked_vehicles),
        eopen_issues: formValues.eopen_issues,
        ecurrent_assignee: formValues.ecurrent_assignee,
        elables : parseInt(formValues.elables),
        estatus: formValues.estatus,
        ebrand: formValues.ebrand,
        egroup: formValues.egroup,
        ewatchers : formValues.ewatchers,
        id: parseInt(formValues.id),
      });
      // Handle the response
      console.log("response :", response.data);
    } catch (error) {
      // Handle error
      console.error(error.response.data);
    }
    navigate("/vehiclelist");
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Vehicle Name</label>
                <input
                  type="text"
                  id="ename"
                  value={formValues.ename || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Type</label>
                <input
                  type="text"
                  id="etype"
                  value={formValues.etype || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Lables</label>
                <input
                  type="number"
                  id="elables"
                  value={formValues.elables || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Watchers</label>
                <input
                  type="text"
                  id="ewatchers"
                  value={formValues.ewatchers || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Vehicle Operator</label>
                <input
                  type="text"
                  id="evehicle_operator"
                  value={formValues.evehicle_operator || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Serail Number</label>
                <input
                  type="number"
                  id="serialnumber"
                  value={formValues.serialnumber || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Linked Vehicles</label>
                <input
                  type="number"
                  id="elinked_vehicles"
                  value={formValues.elinked_vehicles || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Open Issues</label>
                <input
                  type="text"
                  id="eopen_issues"
                  value={formValues.eopen_issues || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Current assignee</label>
                <input
                  type="text"
                  id="ecurrent_assignee"
                  value={formValues.ecurrent_assignee || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>status</label>
                <input
                  type="text"
                  id="estatus"
                  value={formValues.estatus || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Brand</label>
                <input
                  type="text"
                  id="ebrand"
                  value={formValues.ebrand || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Group</label>
                <input
                  type="text"
                  id="egroup"
                  value={formValues.egroup || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>ID</label>
                <input
                  type="number"
                  id="id"
                  value={formValues.id || ""}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipmentform;
