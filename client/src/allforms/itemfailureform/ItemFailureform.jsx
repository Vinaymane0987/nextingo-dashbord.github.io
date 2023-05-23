import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemFailureform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    vehicleName: "",
    Date: "",
    submissionNo: "",
    time: "",
    item: "",
    stage: "",
    remark: "",
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // item a POST request to the API
      const response = await axios.post(baseUrl, {
        vehicleName: formValues.vehicleName,
        Date: formValues.Date,
        submissionNo: parseInt(formValues.submissionNo),
        time: formValues.time,
        item: formValues.item,
        stage: parseInt(formValues.stage),
        remark: formValues.remark,
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
                <label>Date</label>
                <input
                  type="text"
                  id="Date"
                  value={formValues.Date || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>submissionNo</label>
                <input
                  type="number"
                  id="submissionNo"
                  value={formValues.submissionNo || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>time</label>
                <input
                  type="text"
                  id="time"
                  value={formValues.time || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>item</label>
                <input
                  type="text"
                  id="item"
                  value={formValues.item || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>stage</label>
                <input
                  type="number"
                  id="stage"
                  value={formValues.stage || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>remark</label>
                <input
                  type="text"
                  id="remark"
                  value={formValues.remark || ""}
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

export default ItemFailureform;
