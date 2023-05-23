import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceReminderform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    vehicleName: "",
    nextDue: "",
    Status: "",
    serviceTask: "",
    complaince: "",
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
      // complaince a POST request to the API
      const response = await axios.post(baseUrl, {
        vehicleName: formValues.vehicleName,
        nextDue: formValues.nextDue,
        Status: formValues.Status,
        serviceTask: formValues.serviceTask,
        complaince: formValues.complaince,
        lastCompleted: formValues.lastCompleted,
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
                  id="vehicleName"
                  value={formValues.vehicleName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Next Due</label>
                <input
                  type="text"
                  id="nextDue"
                  value={formValues.nextDue || ""}
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
                  id="Status"
                  value={formValues.Status || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Service Task</label>
                <input
                  type="text"
                  id="serviceTask"
                  value={formValues.serviceTask || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>complaince</label>
                <input
                  type="text"
                  id="complaince"
                  value={formValues.complaince || ""}
                  onChange={handleInputChange}
                />  
              </div>
              <div className="formInput">
                <label>Last Completed</label>
                <input
                  type="Date"
                  id="lastCompleted"
                  value={formValues.lastCompleted || ""}
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

export default ServiceReminderform;
