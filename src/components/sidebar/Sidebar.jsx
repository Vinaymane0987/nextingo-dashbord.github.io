import React from "react";
import { getAuth  , signOut } from 'firebase/auth';
import { app } from '../../firebase'
import "./sidebar.scss";
import {
  ExitToApp,
  VpnKeyRounded,
  MonitorHeartOutlined,
  AccountBoxOutlined,
  QueryStatsOutlined,
  Dashboard,
  Person2Outlined,
  NotificationAddOutlined,
  SettingsAccessibilityOutlined,
  Podcasts,
  Report,
  Alarm,
  Timeline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" ,color:"gray"}}>
          <span className="logo">Nextinogo</span>
        </Link>
      </div>
      <hr />
      <div className="middle">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" ,color:"gray"}}  className="link">
            <li>
              <Dashboard className="material__icons" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" ,color:"gray"}} className="link">
            <li>
              <Person2Outlined className="material__icons" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" ,color:"gray"}}  className="link">
            <li>
              <Podcasts className="material__icons" />
              <span>Live</span>
            </li>
          </Link>
          <Link to="/graphs" style={{ textDecoration: "none" ,color:"gray"}}  className="link">
            <li>
              <Timeline className="material__icons" />
              <span>Graphs</span>
            </li>
          </Link>
          <li>
            <Report className="material__icons" />
            <span>Report</span>
          </li>
          <li>
            <Alarm className="material__icons" />
            <span>Alaram</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <QueryStatsOutlined className="material__icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationAddOutlined className="material__icons" />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <MonitorHeartOutlined className="material__icons" />
            <span>System Health</span>
          </li>
          <li>
            <VpnKeyRounded className="material__icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsAccessibilityOutlined className="material__icons" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountBoxOutlined className="material__icons" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="material__icons"  />
            <button onClick={() => signOut(auth)}><span>Logout</span></button>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroptions"></div>
        <div className="coloroptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
