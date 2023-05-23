import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Vendorsform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    full_address: "",
    phone: "",
    contact_name: "",
    website: "",
    watchers : '',
    contact_email: "",
    ratings: "",
    labels: "",
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // website a POST request to the API
      const response = await axios.post(baseUrl, {
        name: formValues.name,
        full_address: formValues.full_address,
        phone: parseInt(formValues.phone),
        contact_name: formValues.contact_name,
        website: formValues.website,
        ratings: parseInt(formValues.ratings),
        labels: formValues.labels,
        watchers : formValues.watchers,
        contact_email: formValues.contact_email,
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
                <label>Full Address</label>
                <input
                  type="text"
                  id="full_address"
                  value={formValues.full_address || ""}
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
                <label>Phone</label>
                <input
                  type="number"
                  id="phone"
                  value={formValues.phone || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>contact_name</label>
                <input
                  type="text"
                  id="contact_name"
                  value={formValues.contact_name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Website</label>
                <input
                  type="text"
                  id="website"
                  value={formValues.website || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Ratings</label>
                <input
                  type="number"
                  id="ratings"
                  value={formValues.ratings || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Labels</label>
                <input
                  type="text"
                  id="labels"
                  value={formValues.labels || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Contact Email</label>
                <input
                  type="text"
                  id="contact_email"
                  value={formValues.contact_email || ""}
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

export default Vendorsform;
