import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";

import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
// import SignUp from "./components/signup/SignUp";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Graph from "./pages/graphs/Graph";

const auth = getAuth(app);
function App() { 
  const [users, setUsers] = useState(null);

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
                
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productsId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
              </Route>
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
