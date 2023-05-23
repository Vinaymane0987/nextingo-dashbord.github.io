import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inspectionform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    iuser: "",
    ivehicle: "",
    iinspection_form: "",
    iduration: "",
    ivehicle_group: "",
    isubmitted: "",
    ifailed_items: "",
    ilocation_exception: "",
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // ivehicle_group a POST request to the API
      const response = await axios.post(baseUrl, {
        iuser: formValues.iuser,
        ivehicle: formValues.ivehicle,
        iinspection_form: formValues.iinspection_form,
        iduration: formValues.iduration,
        ivehicle_group: formValues.ivehicle_group,
        isubmitted: formValues.isubmitted,
        ifailed_items: formValues.ifailed_items,
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
                <label>User</label>
                <input
                  type="text"
                  id="iuser"
                  value={formValues.iuser || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>vehicle</label>
                <input
                  type="text"
                  id="ivehicle"
                  value={formValues.ivehicle || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Inspection_form</label>
                <input
                  type="text"
                  id="iinspection_form"
                  value={formValues.iinspection_form || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Duration</label>
                <input
                  type="text"
                  id="iduration"
                  value={formValues.iduration || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>vehicle_group</label>
                <input
                  type="text"
                  id="ivehicle_group"
                  value={formValues.ivehicle_group || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Submitted</label>
                <input
                  type="text"
                  id="isubmitted"
                  value={formValues.isubmitted || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Failed_items</label>
                <input
                  type="text"
                  id="ifailed_items"
                  value={formValues.ifailed_items || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>ilocation_exception</label>
                <input
                  type="text"
                  id="ilocation_exception"
                  value={formValues.ilocation_exception || ""}
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

export default Inspectionform;
