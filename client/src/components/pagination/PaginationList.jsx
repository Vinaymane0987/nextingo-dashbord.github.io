import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DropDownList from "../dropDownList/DropDownList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: " 0" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PaginationList({tablecomponent , tablecomponent2 , tablecomponent3 , tablecomponent4}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Assigned" {...a11yProps(1)} />
          <Tab label="Unassigned" {...a11yProps(2)} />
          <Tab label="Archived" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <DropDownList />
      <TabPanel value={value} index={0}>
        {tablecomponent}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {tablecomponent2}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {tablecomponent3}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {tablecomponent4}
      </TabPanel>
    </Box>
  );
}
