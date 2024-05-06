import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import loginContext from "./Context";
import "./styles.css";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useContext(loginContext);
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedIn(true);
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
        toast.error("Login Failed:"+errorMessage,{
          autoClose: 1000,hideProgressBar: true,
        })
        setLoggedIn(false);
      });
  };

  return (
    
      <div className="vertical-center">
      <div className="wrapper">
      <p className="singin-up ptext">Sign In</p>
        <form className="loginform">
        
          <div className="bottom2">Email address</div>
          <div className="bottom1">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="bottom2">Password</div>
          <div className="bottom1">
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button onClick={onLogin}>Login</button>
          </div>
          <p className="text-sm text-white text-center">
            No account yet? <NavLink className= "text-navlink" to="/signup">Sign up</NavLink>
          </p>
        </form>
        </div>
      </div>
    
  );
};

export default Login;
