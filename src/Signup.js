import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import "./styles.css";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error("Signup Failed:" + errorMessage, {
          autoClose: 1000,
          hideProgressBar: true,
        });
        // ..
      });
  };
  return (
    <div className="vertical-center">
      <div className="wrapper">
        <p className="singin-up ptext">Sign Up</p>
        <form className="loginform">
          <div className="bottom2">Email address</div>
          <div className="bottom1">
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>

          <div className="bottom2">Password</div>
          <div className="bottom1">
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button type="submit" onClick={onSubmit}>
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <NavLink className="text-navlink" to="/">
              Sign in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
