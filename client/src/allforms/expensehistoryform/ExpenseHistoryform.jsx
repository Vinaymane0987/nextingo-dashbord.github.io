import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseHistoryform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    evehicle: "",
    esource: "",
    etype: "",
    Date: "",
    eamount: "",
    evendor: "",
    ewatchers: "",
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
        evehicle: formValues.evehicle,
        etype: formValues.etype,
        esource: formValues.esource,
        Date: formValues.Date,
        eamount: parseFloat(formValues.eamount),
        evendor: formValues.evendor,
        ewatchers : formValues.ewatchers,
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
                  id="etype"
                  value={formValues.etype || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>source</label>
                <input
                  type="text"
                  id="esource"
                  value={formValues.esource || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Amount</label>
                <input
                  type="number"
                  id="eamount"
                  value={formValues.eamount || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Vendor</label>
                <input
                  type="text"
                  id="evendor"
                  value={formValues.evendor || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Watchers</label>
                <input
                  type="text"
                  id="ewatchers"
                  value={formValues.ewatchers || ""}
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

export default ExpenseHistoryform;
