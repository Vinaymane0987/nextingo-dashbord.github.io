import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Documentform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fileName: "",
    fileSize: "",
    labels: "",
    attachedTo: "",
    Location: "",
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // Location a POST request to the API
      const response = await axios.post(baseUrl, {
        fileName: formValues.fileName,
        fileSize: formValues.fileSize,
        labels: parseInt(formValues.labels),
        attachedTo: formValues.attachedTo,
        Location: formValues.Location,
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
                <label>File Name</label>
                <input
                  type="text"
                  id="fileName"
                  value={formValues.fileName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>File Size</label>
                <input
                  type="text"
                  id="fileSize"
                  value={formValues.fileSize || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>labels</label>
                <input
                  type="number"
                  id="labels"
                  value={formValues.labels || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Attached To</label>
                <input
                  type="text"
                  id="attachedTo"
                  value={formValues.attachedTo || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Location</label>
                <input
                  type="text"
                  id="Location"
                  value={formValues.Location || ""} 
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

export default Documentform;
