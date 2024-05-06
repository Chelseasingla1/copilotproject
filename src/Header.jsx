import "./Header.css";
import loginContext from "./Context";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


function Header(props) {
  const [isLoggedIn, setLoggedIn] = useContext(loginContext);
  const navigate = useNavigate();

  const logginHdlr = () => {
    navigate("/");
  };
  const logoutHdlr = () => {
    setLoggedIn(false);
    navigate("/");
  };
  const posthdlr = () => {
   navigate("/postpage");
  };
const planhdlr=()=>{
  navigate("/planpage")
}
  
  const registerHdlr = () => {};
  return (
    <div className="header">
      <div className="h-left">
        <h1>{props.text}</h1>
      </div>
      {/* <div className="">
        <input placeholder="Search" className="search" />
        <span className="search-icon">&#128269;</span>
      </div> */}
      <div>
      {isLoggedIn &&<span className="post" onClick={planhdlr}>Plan</span>}
      {isLoggedIn &&<span className="post" onClick={posthdlr}>Post</span>}
      {isLoggedIn && (
        <span className="login" onClick={logoutHdlr}>
          Logout
        </span>
      )}
      {/*<span className="login" onClick={registerHdlr}>
        Register
      </span>*/}
      </div>
    </div>
  );
}
export default Header;
