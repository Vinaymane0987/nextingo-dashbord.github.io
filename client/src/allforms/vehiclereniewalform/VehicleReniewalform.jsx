import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VehicleReniewalform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    vehicle: "",
    reneval_type: "",
    vrstatus: "",
    due_date: "",
    watchers : '',
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
        vehicle: formValues.vehicle,
        reneval_type: formValues.reneval_type,
        vrstatus: formValues.vrstatus,
        due_date: formValues.due_date,
        watchers : formValues.watchers,
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
                  id="vehicle"
                  value={formValues.vehicle || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Reneval Type</label>
                <input
                  type="text"
                  id="reneval_type"
                  value={formValues.reneval_type || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Watchers</label>
                <input
                  type="text"
                  id="watchers"
                  value={formValues.watchers || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  id="vrstatus"
                  value={formValues.vrstatus || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Due Date</label>
                <input
                  type="date"
                  id="due_date"
                  value={formValues.due_date || ""}
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

export default VehicleReniewalform;
