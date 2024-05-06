import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Cardlist from "./Cardlist";
import Footer from "./Footer";
import Footer1 from "./Footer1";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      
      <div className="App"></div>
      <div className="main-image-container">
        <img src="image1.jpeg" alt="Large" className="main-image" />
        <h1>Featured Articles</h1>
        <li>
              {/* <Link to="/planpage">Plans</Link> */}
               {/* Add the link to Planpage */}
            </li> 
      </div>
      <Cardlist />
      <Footer text="SIGN UP FOR DAILY NEWSLETTER" />
      <Footer1 />
    </div>
  );
}

export default Home;
