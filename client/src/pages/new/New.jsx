import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
const New = ({ inputs, title, baseUrl }) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if(typeof value === 'string'){
      setFormValues({ ...formValues , [name]: value})
    }else if(typeof value === 'number'){
      setFormValues({ ...formValues , [name]: parseInt(value)})
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      // Make a POST request to the API
      const response = await axios.post(baseUrl, formValues);
      // Handle the response
      console.log("response :",response.data);
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
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    value={formValues[input.name] || ""}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
