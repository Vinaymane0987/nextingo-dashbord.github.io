import "./vehicleform.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VehicleForm = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    vname: "",
    vtype: "",
    vstatus: "",
    vin: "",
    vmake: "",
    vmodel: "",
    vgroup: "",
    vyear: "",
    voperator : '',
    current_meter: "",
    licenseplate: "",
    vwatchers : '',
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
        vname: formValues.vname,
        vtype: formValues.vtype,
        vstatus: formValues.vstatus,
        vin: formValues.vin,
        vmake: formValues.vmake,
        vmodel: formValues.vmodel,
        vgroup: formValues.vgroup,
        voperator : formValues.voperator,
        vyear: formValues.vyear,
        current_meter: parseInt(formValues.current_meter),
        licenseplate: formValues.licenseplate,
        vwatchers : formValues.vwatchers,
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
                  id="vname"
                  value={formValues.vname || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Type</label>
                <input
                  type="text"
                  id="vtype"
                  value={formValues.vtype || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Operator</label>
                <input
                  type="text"
                  id="voperator"
                  value={formValues.voperator || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Watchers</label>
                <input
                  type="text"
                  id="vwatchers"
                  value={formValues.vwatchers || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  id="vstatus"
                  value={formValues.vstatus || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>VIN</label>
                <input
                  type="text"
                  id="vin"
                  value={formValues.vin || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Make</label>
                <input
                  type="text"
                  id="vmake"
                  value={formValues.vmake || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Model</label>
                <input
                  type="text"
                  id="vmodel"
                  value={formValues.vmodel || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Group</label>
                <input
                  type="text"
                  id="vgroup"
                  value={formValues.vgroup || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Year</label>
                <input
                  type="text"
                  id="vyear"
                  value={formValues.vyear || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Current Meter</label>
                <input
                  type="number"
                  id="current_meter"
                  value={formValues.current_meter || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>License Plate</label>
                <input
                  type="text"
                  id="licenseplate"
                  value={formValues.licenseplate || ""}
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

export default VehicleForm;
