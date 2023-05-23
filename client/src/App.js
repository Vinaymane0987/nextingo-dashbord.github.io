import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/dark.scss";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// import {GoogleSignin} from "react-google-signin";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import Report from "./pages/report/Report";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Graph from "./pages/graphs/Graph";
import VehicleList from "./pages/vehicleList/VehicleList";
import Equipment from "./pages/equipment/Equipment";
import Inspection from "./pages/inspection/Inspection";
import Ehistory from "./pages/eHistory/Ehistory";
import Places from "./pages/places/Places";
import Schedules from "./pages/schedules/Schedules";
import Document from "./pages/document/Document";
import ItFailure from "./pages/itFailure/ItFailure";
import Sremainders from "./pages/sRemainders/Sremainders";
import Vrr from "./pages/vrr/Vrr";
import Issue from "./pages/issue/Issue";
import Vendors from "./pages/vendors/Vendors";
import FuelHistory from "./pages/fuelHistory/FuelHistory";
import VehicleForm from "./allforms/vehicleform/VehicleForm";
import VehiclelistUpdate from "./updateforms/vehiclelistupdate/VehiclelistUpdate";
import ExpenseHistoryform from "./allforms/expensehistoryform/ExpenseHistoryform";
import Equipmentform from "./allforms/equipmentform/Equipmentform";
import FuelHistoryform from "./allforms/fuelhistoryform/FuelHistoryform";
import ServiceReminderform from "./allforms/serviceremindersform/ServiceReminderform";
import VehicleReniewalform from "./allforms/vehiclereniewalform/VehicleReniewalform";
import Vendorsform from "./allforms/vendorsform/Vendorsform";
import Issueform from "./allforms/issueform/Issueform";
import Placesform from "./allforms/placesform/Placesform";
import Documentform from "./allforms/documentform/Documentform";
import Inspectionform from "./allforms/inspectionhistoryform/Inspectionform";
import Schedulesform from "./allforms/schedulesform/Schedulesform";
import ItemFailureform from "./allforms/itemfailureform/ItemFailureform";
import SignUp from "./components/signup/SignUp";
// import { withAuthenticator } from 'aws-amplify-react';
const auth = getAuth(app);
function App() {
  const [users, setUsers] = useState(null);
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   GoogleSignin.init({
  //     clientId: "937884102194-sloqjuspbvatilckpsv7v713p4evi6t8.apps.googleusercontent.com",
  //     clientSecret: "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",
  //   });
  // }, []);

  // const handleSignIn = () => {
  //   GoogleSignin.signIn();
  // };

  // const handleSignOut = () => {
  //   GoogleSignin.signOut();
  // };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("your are now logged in");
        setUsers(user);
      } else {
        console.log("your are logged out");
        setUsers(null);
      }
    });
  }, []);
  return (
    <div className="app ">
      <BrowserRouter>
        {!users ? (
          <Login />
        ) : (
          <>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>

              <Route path="graphs">
                <Route index element={<Graph />} />
              </Route>

              <Route path="report">
                <Route index element={<Report />} />
              </Route>

              <Route path="vehiclelist">
                <Route index element={<VehicleList />} />
                <Route
                  path=":listId"
                  element={
                    <VehiclelistUpdate baseUrl="https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/vehiclelist" />
                  }
                />
                <Route
                  path="vehiclelsitform"
                  element={
                    <VehicleForm
                      title="Add New vehicle"
                      baseUrl="https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/vehiclelist"
                    />
                  }
                />
              </Route>

              <Route path="equipment">
                <Route index element={<Equipment />} />
                <Route
                  path="equipmentform"
                  element={
                    <Equipmentform
                      title="Add New Equipment"
                      baseUrl="https://siai51x4u4.execute-api.ap-northeast-1.amazonaws.com/dashboard/equipment"
                    />
                  }
                />
              </Route>

              <Route path="fuelhistory">
                <Route index element={<FuelHistory />} />
                <Route
                  path="fuelhistoryform"
                  element={<FuelHistoryform title="Add New Equipment" />}
                />
              </Route>

              <Route path="places">
                <Route index element={<Places />} />
                <Route
                  path="placesform"
                  element={<Placesform title="Add New Place" />}
                />
              </Route>

              <Route path="schedules">
                <Route index element={<Schedules />} />
                <Route
                  path="scheduleform"
                  element={<Schedulesform title="Add Schedule" />}
                />
              </Route>

              <Route path="document">
                <Route index element={<Document />} />
                <Route
                  path="documentform"
                  element={<Documentform title="Add New Document" />}
                />
              </Route>

              <Route path="vendors">
                <Route index element={<Vendors />} />
                <Route
                  path="vendorsform"
                  element={<Vendorsform title="Add New Vendor" />}
                />
              </Route>

              <Route path="issue">
                <Route index element={<Issue />} />
                <Route
                  path="issueform"
                  element={<Issueform title="Add New Issue" />}
                />
              </Route>

              <Route path="vrr">
                <Route index element={<Vrr />} />
                <Route
                  path="vrrform"
                  element={
                    <VehicleReniewalform title="Add New Reniewal Reminder" />
                  }
                />
              </Route>

              <Route path="sremainders">
                <Route index element={<Sremainders />} />
                <Route
                  path="sreminderform"
                  element={<ServiceReminderform title="Add ServiceReminder" />}
                />
              </Route>

              <Route path="itFailure">
                <Route index element={<ItFailure />} />
                <Route
                  path="itemfailureform"
                  element={<ItemFailureform title="Add an ItemFailure" />}
                />
              </Route>

              <Route path="ehistory">
                <Route index element={<Ehistory />} />
                <Route
                  path="ehistoryform"
                  element={<ExpenseHistoryform title="Add New Expense" />}
                />
              </Route>

              <Route path="inspection">
                <Route index element={<Inspection />} />
                <Route
                  path="inspectionform"
                  element={<Inspectionform title="Add New Inspection" />}
                />
              </Route>

              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New title="Add New User" />} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productsId" element={<Single />} />
                <Route path="new" element={<New title="Add New Product" />} />
              </Route>
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
