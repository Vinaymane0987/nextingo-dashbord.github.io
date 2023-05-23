import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import "./sidebar.scss";
import {
  ExitToApp,
  Dashboard,
  Person2Outlined,
  Podcasts,
  Report,
  Timeline,
  ListAltRounded,
  AssessmentRounded,
  History,
  Construction,
  MiscellaneousServices,
  StoreMallDirectory,
  NotificationAddRounded,
  Autorenew,
  Sell,
  LocalGasStation,
  BugReport,
  Storefront,
  Article,
  Reviews,
  EventAvailable,
  EventBusy,
  Call,
  ContactPage,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo">Nextinogo</span>
        </Link>
      </div>
      <hr />
      <div className="middle">
        <ul>
          <p className="title">Main</p>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Dashboard className="material__icons" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link
            to="/users"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Person2Outlined className="material__icons" />
              <span>Users</span>
            </li>
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Podcasts className="material__icons" />
              <span>Work Orders</span>
            </li>
          </Link>
          <Link
            to="/graphs"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Timeline className="material__icons" />
              <span>Graphs</span>
            </li>
          </Link>
          <p className="title">vehicle</p>
          <Link
            to="/vehiclelist"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <ListAltRounded className="material__icons" />
              <span>Vehicle List</span>
            </li>
          </Link>
          <li>
            <AssessmentRounded className="material__icons" />
            <span>vehicle Assignments</span>
          </li>
          <Link
            to="/ehistory"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <History className="material__icons" />
              <span>Expense history</span>
            </li>
          </Link>
          <p className="title">Equipment</p>
          <Link
            to="/equipment"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Construction className="material__icons" />
              <span>equipment</span>
            </li>
          </Link>
          <p className="title">Service</p>
          <li>
            <MiscellaneousServices className="material__icons" />
            <span>Service History</span>
          </li>
          <li>
            <StoreMallDirectory className="material__icons" />
            <span>Shop directory</span>
          </li>
          <p className="title">Reminders</p>
          <Link
            to="/sremainders"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <NotificationAddRounded className="material__icons" />
              <span>Service Reminders</span>
            </li>
          </Link>
          <Link
            to="/vrr"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Autorenew className="material__icons" />
              <span>vehilces Renewals Reminders </span>
            </li>
          </Link>
          <p className="title">Venders</p>
          <Link
            to="/vendors"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Sell className="material__icons" />
              <span>Venders</span>
            </li>
          </Link>
          <p className="title">Fuel</p>
          <Link
            to="/fuelhistory"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <LocalGasStation className="material__icons" />
              <span>Fuel History</span>
            </li>
          </Link>
          <p className="title">Issues</p>
          <Link
            to="/issue"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <BugReport className="material__icons" />
              <span>issues</span>
            </li>
          </Link>
          <p className="title">Places</p>
          <Link
            to="/places"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Storefront className="material__icons" />
              <span>places</span>
            </li>
          </Link>
          <p className="title">Documents</p>
          <Link
            to="/document"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Article className="material__icons" />
              <span>Documents</span>
            </li>
          </Link>
          <p className="title">Inspection</p>
          <Link
            to="/inspection"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <Reviews className="material__icons" />
              <span>Inspection History</span>
            </li>
          </Link>
          <Link
            to="/schedules"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li>
              <EventAvailable className="material__icons" />
              <span>Scheduls</span>
            </li>
          </Link>
          <Link
            to="/itFailure"
            className="link"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <li>
              <EventBusy className="material__icons" />
              <span>Item Failure</span>
            </li>
          </Link>
          <p className="title">Reports</p>
          <Link
            to="/report"
            className="link"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>
              <Report className="material__icons" />
              <span>Report</span>
            </li>
          </Link>
          <p className="title">Contacts</p>
          <li>
            <ContactPage className="material__icons" />
            <span>contact</span>
          </li>
          <li>
            <ExitToApp className="material__icons" />
            <button onClick={() => signOut(auth)}>
              <span>Logout</span>
            </button>
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
