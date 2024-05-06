// import './Footer.css'
// import {  Button } from 'semantic-ui-react'
// import axios from "axios";

// function Footer(props) {

//     const onSubscribe=async()=>{
//         console.log("subscribe");
//         try {
            
//             const { data } = await axios.post('http://localhost:4000/api/email2', {
//               email:"chelsea4777.be22@chitkara.edu.in",
//               subject:"hi",
//               message:"welcome",
//             });
//            console.log("success");
//           } catch (error) {
           
//             console.log(
//               error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message
//             );
//           }

//     }
//     return (<div className="footer">
//         <div className="footer-left">
//             <h1>{props.text}</h1>
//         </div>
//         <div className="bar">
//             <input placeholder="Enter Your Email" className="email" />
//         </div>
//         <div className="footer-right">
//             <Button onClick={onSubscribe}>Subscribe</Button>


//         </div>
//     </div>
//     )
// }
// export default Footer;
import './Footer.css';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

function Footer(props) {
  const onSubscribe = async () => {
    console.log("subscribe");
    try {
      const { data } = await axios.post('http://localhost:3000/api/email', {
        emails: ["chelsea4777.be22@chitkara.edu.in"],
      });
      console.log("success", data);
    } catch (error) {
      console.log(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <div className="footer">
      <div className="footer-left">
        <h1>{props.text}</h1>
      </div>
      <div className="bar">
        <input placeholder="Enter Your Email" className="email" />
      </div>
      <div className="footer-right">
        <Button onClick={onSubscribe}>Subscribe</Button>
      </div>
    </div>
  );
}

export default Footer;
