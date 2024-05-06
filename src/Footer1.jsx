import React from 'react';
import './Footer1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import facebookLogo from "./facebook.svg";
import instagramLogo from "./instagram.svg";
import twitterLogo from "./twitter.svg";
import { useState } from "react";
import "./Footer.css"; // Import the CSS styles for this component
import axios from "axios"; // Import axios for making HTTP requests

const Footer1 = () => {
  const [showText, setShowText] = useState(true);
    const [emailList, setEmailList] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const emails = emailList.split(/[,;]/).map((email) => email.trim());
            // Make a POST request to the "/api/email" endpoint with the list of emails
            await axios.post("/api/email", { emails });

            setShowText(false);

            setTimeout(() => {
                setShowText(true);
                setEmailList("");
            }, 5000);

        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

  return (
    <>
      <div className="footer1-container" id='footerId'>
        <div className="line-1">
          <div className="sub-line-1">
            <h2>Explore</h2>
            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </div>
          <div className="sub-line-1">
            <h2>Support</h2>
            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </div>
          <div className="sub-line-1">
            <h2>Stay Connected</h2>
            <a href="#" >
              <img className="fontlogo" src={facebookLogo} alt="Facebook logo" width={35} height={35}  />
            </a>
            <a href="#">
              <img  className="fontlogo" src={instagramLogo} alt="Instagram logo" width={35} height={35} />
            </a>
            <a href="#">
              <img className="fontlogo" src={twitterLogo} alt="Twitter logo" width={35} height={35} />
            </a>
          </div>
        </div>
        <div className="line-2">
          <h2>DEV@Deakin 2022</h2>
          <div className="sub-line-2">
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Code of Conducts</p>
          </div>
        </div>
        {/* <div id="myForm">
            <p>
                {showText ? "SIGN UP FOR OUR DAILY INSIDER:"
                    : "Thank you for signing up"}
            </p>
            <iframe title='Sign Up' name="EmptyFrame" className="hidden" />
            <form
                id="EmailForm"
                action="/subscribe"
                target="EmptyFrame"
                method="POST"
                onSubmit={handleFormSubmit}
                className={showText ? null : "hidden"}
            >
                <input
                    name="email"
                    type="text"
                    placeholder="Enter email addresses (separated by comma or semicolon)"
                    value={emailList}
                    onChange={(e) => setEmailList(e.target.value)}
                />
                <button name="submit" type="submit">
                    Subscribe
                </button>
            </form> */}
    
      </div>
    </>
  )
}


export default Footer1;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import facebookLogo from "./facebook.svg";
// import instagramLogo from "./instagram.svg";
// import twitterLogo from "./twitter.svg";
// import "./Footer1.css"; // Import the CSS styles for this component

// const Footer1 = () => {
//   const [showText, setShowText] = useState(true);
//   const [emailList, setEmailList] = useState("");

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const emails = emailList.split(/[,;]/).map((email) => email.trim());
//       // Make a POST request to the "/api/email" endpoint with the list of emails
//       await axios.post("http://localhost:3000/api/email", { emails });

//       setShowText(false);

//       setTimeout(() => {
//         setShowText(true);
//         setEmailList("");
//       }, 5000);
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };

//   return (
//     <>
//       <div className="footer1-container" id='footerId'>
//         {/* ... (rest of your component code) ... */}
//         <div id="myForm">
//           <p>
//             {showText ? "SIGN UP FOR OUR DAILY INSIDER:" : "Thank you for signing up"}
//           </p>
//           <iframe title='Sign Up' name="EmptyFrame" className="hidden" />
//           <form
//             id="EmailForm"
//             action="/subscribe"
//             target="EmptyFrame"
//             method="POST"
//             onSubmit={handleFormSubmit}
//             className={showText ? null : "hidden"}
//           >
//             <input
//               name="email"
//               type="text"
//               placeholder="Enter email addresses (separated by comma or semicolon)"
//               value={emailList}
//               onChange={(e) => setEmailList(e.target.value)}
//             />
//             <button name="submit" type="submit">
//               Subscribe
//             </button>

//           </form>
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer1;
