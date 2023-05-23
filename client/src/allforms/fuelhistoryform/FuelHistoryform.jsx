import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FuelHistoryform = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fvehicle: "",
    fvendor: "",
    fcost_per_meter: "",
    fuel_fconomy: "",
    fusage: "",
    per_litre: "",
    fdate: "",
    fmeter_entry: "",
    ftotal : '',
    fvolume: "",
    falerts: "",
    ftime : '',
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // fusage a POST request to the API
      const response = await axios.post(baseUrl, {
        fvehicle: formValues.fvehicle,
        fvendor: formValues.fvendor,
        fcost_per_meter: parseFloat(formValues.fcost_per_meter),
        fuel_fconomy: parseInt(formValues.fuel_fconomy),
        fusage: parseFloat(formValues.fusage),
        per_litre: parseFloat(formValues.per_litre),
        fdate: formValues.fdate,
        ftotal : parseInt(formValues.ftotal),
        fmeter_entry: parseInt(formValues.fmeter_entry),
        fvolume: parseFloat(formValues.fvolume),
        falerts: formValues.falerts,
        ftime : formValues.ftime,
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
                  id="fvehicle"
                  value={formValues.fvehicle || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Vendor</label>
                <input
                  type="text"
                  id="fvendor"
                  value={formValues.fvendor || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Total</label>
                <input
                  type="number"
                  id="ftotal"
                  value={formValues.ftotal || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Time</label>
                <input
                  type="text"
                  id="ftime"
                  value={formValues.ftime || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Cost per liter</label>
                <input
                  type="number"
                  id="fcost_per_meter"
                  value={formValues.fcost_per_meter || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Fuel economy</label>
                <input
                  type="number"
                  id="fuel_fconomy"
                  value={formValues.fuel_fconomy || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>usage</label>
                <input
                  type="number"
                  id="fusage"
                  value={formValues.fusage || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Per Liter</label>
                <input
                  type="number"
                  id="per_litre"
                  value={formValues.per_litre || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Date</label>
                <input
                  type="text"
                  id="fdate"
                  value={formValues.fdate || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Meter Entry</label>
                <input
                  type="number"
                  id="fmeter_entry"
                  value={formValues.fmeter_entry || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Volume</label>
                <input
                  type="number"
                  id="fvolume"
                  value={formValues.fvolume || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Alerts</label>
                <input
                  type="text"
                  id="falerts"
                  value={formValues.falerts || ""}
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

export default FuelHistoryform;
