import "./style.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const VehiclelistUpdate = ({ baseUrl }) => {
  const navigate = useNavigate();
  const [data , setData] = useState([]);
  const [formValues, setFormValues] = useState({
    vname: "",
    vtype: "",
    vstatus: "",
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

  const {id} = useParams(); 
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await axios.get("https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/vehiclelist/" + id);
        setData(response.data.vehicleList);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCoin();
  }, [baseUrl]);


  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // vmake a POST request to the API
      const response = await axios.put("https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/vehiclelist/" + id, {
        vname: formValues.vname,
        vtype: formValues.vtype,
        vstatus: formValues.vstatus,
        vin: formValues.vin,
        vmake: formValues.vmake,
        vmodel: formValues.vmodel,
        vgroup: formValues.vgroup,
        voperator : formValues.voperator,
        vyear: formValues.vyear,
        current_meter: parseInt(formValues.current_meter),
        licenseplate: formValues.licenseplate,
        vwatchers : formValues.vwatchers,
        id: parseInt(formValues.id),
      });
      // Handle the response
      console.log("response :", response.data);
      navigate("/vehiclelist");
    } catch (error) {
      // Handle error
      console.error(error.response.data);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>Update Vehicle</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Vehicle Name</label>
                <input
                  type="text"
                  id="vname"
                  value={data.vname }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Type</label>
                <input
                  type="text"
                  id="vtype"
                  value={data.vtype }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Operator</label>
                <input
                  type="text"
                  id="voperator"
                  value={data.voperator }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Watchers</label>
                <input
                  type="text"
                  id="vwatchers"
                  value={data.vwatchers }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  id="vstatus"
                  value={data.vstatus }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>VIN</label>
                <input
                  type="text"
                  id="vin"
                  value={data.vin }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Make</label>
                <input
                  type="text"
                  id="vmake"
                  value={data.vmake }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Model</label>
                <input
                  type="text"
                  id="vmodel"
                  value={data.vmodel }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Group</label>
                <input
                  type="text"
                  id="vgroup"
                  value={data.vgroup }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Year</label>
                <input
                  type="text"
                  id="vyear"
                  value={data.vyear }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Current Meter</label>
                <input
                  type="number"
                  id="current_meter"
                  value={data.current_meter }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>License Plate</label>
                <input
                  type="text"
                  id="licenseplate"
                  value={data.licenseplate }
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>ID</label>
                <input
                  type="number"
                  id="id"
                  value={data.id }
                  onChange={handleInputChange}
                />
              </div>
              <Link to='/vehiclelist'>back</Link>
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclelistUpdate;
