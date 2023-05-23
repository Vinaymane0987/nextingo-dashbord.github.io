import React, { useState } from "react";
import "./signup.scss";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase";
import loginImg from "../../assests/loginImg.png";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      console.log(value);
      alert("successfully created user");
    });
  };
  return (
    <div className="signup">
      <div className="signupImg">
        <img src={loginImg} alt="logo" />
      </div>
      <div className="signup__container">
        <div className="box">
          <h1>Register</h1>
          <div className="labelcontainer">
            {/* <label>email</label> */}
            <input
              type="email"
              placeholder="enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="labelcontainer2">
            {/* <label>password</label> */}
            <input
              type="password"
              placeholder="enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <br />
          <button className="submitbutton" onClick={createUser}>
            SignUp
          </button>
          <Link to="/login" className="linkcontainer">
            Do you have an account? <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
