import React, { useState } from "react";
import "./login.scss";
import { Google } from "@mui/icons-material";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase";
import loginImg from "../../assests/loginImg.png";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      console.log(value);
      alert("successfully created user");
    });
  };

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => console.log(result));
  };
  return (
    <div className="signup">
      <div className="signupImg">
        <img src={loginImg} alt="logo" />
      </div>
      <div className="signup__container">
        <div className="box">
          <h1>Sign In</h1>
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
            Login
          </button>
          <div className="googlebutton">
            <Google />
            <button onClick={signUpWithGoogle}>Login with google</button>
          </div>
          <Link to='/signup' className="linkcontainer">
            Don't you have an account? <span>Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
