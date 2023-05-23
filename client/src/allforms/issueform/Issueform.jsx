import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Issueform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    reported_date: "",
    asset_record_type: "",
    summary: "",
    labels: "",
    assigned: "",
    asset_name: "",
    issue: "", 
    watchers : '',
    issue_status: "",
    isource : '',
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // assigned a POST request to the API
      const response = await axios.post(baseUrl, {
        reported_date: formValues.reported_date,
        asset_record_type: formValues.asset_record_type,
        summary: formValues.summary,
        labels: formValues.labels,
        assigned: formValues.assigned,
        asset_name: formValues.asset_name,
        issue: formValues.issue,
        watchers : formValues.watchers,
        isource : formValues.isource,
        issue_status: formValues.issue_status,
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
                <label>Reported Date</label>
                <input
                  type="text"
                  id="reported_date"
                  value={formValues.reported_date || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>asset_record_type</label>
                <input
                  type="text"
                  id="asset_record_type"
                  value={formValues.asset_record_type || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>source</label>
                <input
                  type="text"
                  id="isource"
                  value={formValues.isource || ""}
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
                <label>summary</label>
                <input
                  type="text"
                  id="summary"
                  value={formValues.summary || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>labels</label>
                <input
                  type="text"
                  id="labels"
                  value={formValues.labels || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>assigned</label>
                <input
                  type="text"
                  id="assigned"
                  value={formValues.assigned || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>asset_name</label>
                <input
                  type="text"
                  id="asset_name"
                  value={formValues.asset_name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>issue</label>
                <input
                  type="text"
                  id="issue"
                  value={formValues.issue || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>issue_status</label>
                <input
                  type="text"
                  id="issue_status"
                  value={formValues.issue_status || ""}
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

export default Issueform;
