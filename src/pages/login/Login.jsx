import React, {useState} from "react";
import './login.scss'
import { Google } from "@mui/icons-material";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import {app}  from "../../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth ,email , password).then((value) => {
        console.log(value);

    }).catch((err) =>{
        console.log(err);
    })
}

const signUpWithGoogle = () => {
  signInWithPopup(auth, googleProvider).then((result) => console.log(result));
};
  return (
    <div className="signup">
    <div className="signup__container">
      <div className="box">
        <h1>Login</h1>
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
        <button className="submitbutton" onClick={signinUser}>Submit</button>
        <div className="googlebutton">
        <Google />
        <button onClick={signUpWithGoogle}>Login with google</button>
        </div>
        <a href="/signup">Register</a>
      </div>
    </div>
  </div>
  )
}

export default Login