import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Schedulesform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    vehicle: "",
    schedule: "",
    istatus: "",
    next_due: "",
    last_inspected: "",
    inspection_Form: "",
    manually_overridden: "",
    frequency: "",
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // last_inspected a POST request to the API
      const response = await axios.post(baseUrl, {
        vehicle: formValues.vehicle,
        schedule: formValues.schedule,
        istatus: formValues.istatus,
        next_due: formValues.next_due,
        last_inspected: formValues.last_inspected,
        inspection_Form: formValues.inspection_Form,
        manually_overridden: formValues.manually_overridden,
        frequency: parseInt(formValues.frequency),
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
                <label>schedule</label>
                <input
                  type="date"
                  id="schedule"
                  value={formValues.schedule || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  id="istatus"
                  value={formValues.istatus || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Next_due</label>
                <input
                  type="date"
                  id="next_due"
                  value={formValues.next_due || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>last_inspected</label>
                <input
                  type="date"
                  id="last_inspected"
                  value={formValues.last_inspected || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>inspection_Form</label>
                <input
                  type="text"
                  id="inspection_Form"
                  value={formValues.inspection_Form || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>manually_overridden</label>
                <input
                  type="text"
                  id="manually_overridden"
                  value={formValues.manually_overridden || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>frequency</label>
                <input
                  type="number"
                  id="frequency"
                  value={formValues.frequency || ""}
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

export default Schedulesform;
