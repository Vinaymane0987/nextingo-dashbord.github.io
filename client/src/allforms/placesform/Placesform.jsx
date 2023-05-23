import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Placesform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    description: "",
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
        name: formValues.name,
        address: formValues.address,
        description: formValues.description,
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
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  value={formValues.name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  id="address"
                  value={formValues.address || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>description</label>
                <input
                  type="text"
                  id="description"
                  value={formValues.description || ""}
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

export default Placesform;
