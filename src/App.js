import "./App.css";
import React, { useState } from "react";

import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import loginContext from './Context';
import  Header  from "./Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Planpage from './Planpage';
import Webpage from "./Webpage";
import PostPage from "./PostPage";
//import FindQuestion from "./FindQuestion"
//import ArticleForm from "./ArticleForm";
import AR from "./AR";
import FQ from "./FQ";
import FindQuestion from "./FindQuestion";
import ArticleForm from "./ArticleForm";
import QuestionForm from "./QuestionForm";
function App() {
  const [isLoggedIn,setLoggedIn]=useState(false);
  return (
    <div>
    
      <Router>
        <div className="">
        
          <section>
          <loginContext.Provider value={[isLoggedIn,setLoggedIn]}>
          <Header text="DEV@DEAKIN" />
            <Routes>
              <Route path="/home" element={isLoggedIn?<Home />:<Login/>} />{" "}
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/planpage" element={<Planpage />} /> 
              <Route path="/postpage" element={<PostPage />} /> 
                  <Route path="/postpage/findquestion" element={<FindQuestion />} /> 
                  <Route path="/postpage/article" element={<ArticleForm />} /> 
                  <Route path="/postpage/questionform" element={<QuestionForm />} />
            </Routes>
            <ToastContainer position="bottom-center" />
            </loginContext.Provider>
          </section>
        </div>
      </Router>
    </div>
  );
}
// https://codesandbox.io/s/react-markdown-oecc0?file=/src/App.tsx:58-131
export default App;
