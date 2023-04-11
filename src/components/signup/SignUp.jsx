import React, { useState } from "react";
import "./signup.scss";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      alert("success", value);
    });
  };
  return (
    <div className="signup" id="signup">
      <div className="signup__container">
        <div className="box">
          <h1>Register</h1>
          <label>email</label>
          <input
            type="email"
            placeholder="enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>password</label>
          <input
            type="password"
            placeholder="enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button className="submitbutton" onClick={createUser}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
