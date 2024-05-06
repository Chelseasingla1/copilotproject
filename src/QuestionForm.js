// import React, { useState } from 'react';
// import './QuestionForm.css';
// import { getDatabase, ref, set } from "firebase/database";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebase";
// function QuestionForm() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [tags, setTags] = useState('');
//   const userCollectionRef = collection(db, "question");

//   const handleSubmit = async () => {
//     await addDoc(userCollectionRef, { title, description,  tags });
//     alert("Data Uploaded!");
//   };
//   // const handleSubmit = () => {
//   //   // Handle form submission here
//   // };
  
//   return (
//     <div className="question-form">
//       <h2>Ask a Question</h2>
//       <div className="form-field">
//         <label>Title:</label>
//         <input type="text" placeholder="Enter title" onChange={(event) => setTitle(event.target.value)} />
//       </div>
//       <div className="form-field">
//         <label>Description:</label>
//         <textarea rows="4" placeholder="Enter description" onChange={(event) => setDescription(event.target.value)} />
//       </div>
//       <div className="form-field">
//         <label>Tags:</label>
//         <input type="text" placeholder="Enter tags" onChange={(event) => setTags(event.target.value)} />
//       </div>
//       <button onClick={handleSubmit} className="submit-button">
//         Post</button> </div>
//   );}

// export default QuestionForm;


// QuestionForm.js
// import React, { useState, useEffect } from 'react';
// import { db } from './firebase';
// import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
// import "./QuestionForm.css";

// function QuestionForm() {
//   const [questions, setQuestions] = useState([]);
//   const [filterTitle, setFilterTitle] = useState('');
//   const [filterTag, setFilterTag] = useState('');
//   const [newQuestion, setNewQuestion] = useState({
//     title: '',
//     tag: '',
//     desc: '',
//     date: '', // Add date field
//   });
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const userQuestionsRef = collection(db, 'questions');
//   const [filteredQuestions, setFilteredQuestions] = useState([]);

//   useEffect(() => {
//     const getQuestions = async () => {
//       const data = await getDocs(userQuestionsRef);
//       const questionData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setQuestions(questionData);
//       setFilteredQuestions(questionData);
//     };
//     getQuestions();
//   }, []);

//   const handleFilter = () => {
//     const filteredQuestions = questions.filter(
//       (question) =>
//         question.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
//         question.tag.toLowerCase().includes(filterTag.toLowerCase())
//     );
//     setFilteredQuestions(filteredQuestions);
//   };

//   const handleDeleteQuestion = async (id) => {
//     await deleteDoc(doc(db, 'questions', id));
//     const updatedQuestions = filteredQuestions.filter((question) => question.id !== id);
//     setFilteredQuestions(updatedQuestions);
//   };

//   const handleSubmitNewQuestion = async () => {
//     // Add the current date to the new question
//     const currentDate = new Date().toLocaleDateString();
//     const questionWithDate = { ...newQuestion, date: currentDate };

//     await addDoc(collection(db, 'questions'), questionWithDate);
//     setFilteredQuestions([...filteredQuestions, questionWithDate]);
//     setNewQuestion({ title: '', tag: '', desc: '', date: '' });
//   };

//   const handleExpand = (index) => {
//     setExpandedIndex(index === expandedIndex ? null : index);
//   };

//   return (
//     <div className="find-question">
//       <h1>Filter Questions</h1>
//       <div className='filter'>
//         <h5>Title:</h5>
//         <input
//           type="text"
//           placeholder="Filter by title"
//           value={filterTitle}
//           onChange={(e) => setFilterTitle(e.target.value)}
//         />

//         <h5>Tag:</h5>
//         <input
//           type="text"
//           placeholder="Filter by tag"
//           value={filterTag}
//           onChange={(e) => setFilterTag(e.target.value)}
//         />
//         <button onClick={handleFilter}>Filter</button>
//       </div>

//       <h1>Add New Question</h1>
//       <div className='new-question'>
//         <h5>Title:</h5>
//         <input
//           type="text"
//           placeholder="Title"
//           value={newQuestion.title}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, title: e.target.value })
//           }
//         />
//         <h5>Description:</h5>
//         <input
//           type="text"
//           placeholder="Description"
//           value={newQuestion.desc}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, desc: e.target.value })
//           }
//         />

//         <h5>Tag:</h5>
//         <input
//           type="text"
//           placeholder="Tag"
//           value={newQuestion.tag}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, tag: e.target.value })
//           }
//         />
//         <button onClick={handleSubmitNewQuestion}>Submit</button>
//       </div>

//       <h1>Questions</h1>
//       {filteredQuestions.map((question, index) => (
//         <div className="card" key={question.id}>
//           <h2>Question: {index + 1}</h2>
//           <h2>Title: {question.title}</h2>
//           <p>Date: {question.date}</p> {/* Display the date */}
//           <button onClick={() => handleDeleteQuestion(question.id)}>Delete</button>
//           <button onClick={() => handleExpand(index)}>
//             {expandedIndex === index ? 'Collapse' : 'Expand'}
//           </button>
//           {expandedIndex === index && (
//             <div>
//               <h3>More Details:</h3>
//               <p>Description: {question.desc}</p>
//               <p>Tag: {question.tag}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default QuestionForm;





import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import "./QuestionForm.css";
import Draggable from 'react-draggable';
import NavPost from './NavPost';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/dracula.css'
import "codemirror/lib/codemirror.css";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
function QuestionForm() {
  const options = {
    lineNumbers: true,
    matchBrackets: true,
    mode: 'javascript',
    theme: 'dracula'
};
const options2={

  lineNumbers: true,

  mode: "javascript",
  matchBrackets: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        smartIndent: true,
        lineNumbers: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        autoCloseTags: true,

}
  const [questions, setQuestions] = useState([]);
  // const [filterTitle, setFilterTitle] = useState('');
  // const [filterTag, setFilterTag] = useState('');
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    tag: '',
    desc: '',
    date: '', // Add date field
  });
  // const [expandedIndex, setExpandedIndex] = useState(null);

  const userQuestionsRef = collection(db, 'questions');
  // const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await getDocs(userQuestionsRef);
      const questionData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQuestions(questionData);
      // setFilteredQuestions(questionData);
    };
    getQuestions();
  }, []);

  // const handleFilter = () => {
  //   const filteredQuestions = questions.filter(
  //     (question) =>
  //       question.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
  //       question.tag.toLowerCase().includes(filterTag.toLowerCase())
  //   );
  //   setFilteredQuestions(filteredQuestions);
  // };

  // const handleDeleteQuestion = async (id) => {
  //   await deleteDoc(doc(db, 'questions', id));
  //   const updatedQuestions = filteredQuestions.filter((question) => question.id !== id);
  //   setFilteredQuestions(updatedQuestions);
  // };

  const handleSubmitNewQuestion = async () => {
    // Add the current date to the new question
    const currentDate = new Date().toLocaleDateString();
    const questionWithDate = { ...newQuestion, date: currentDate };

    await addDoc(collection(db, 'formquestions'), questionWithDate);
    
    setNewQuestion({ title: '', tag: '', desc: '', date: '' });
    alert("Data Uploaded!");
  };

  // const handleExpand = (index) => {
  //   setExpandedIndex(index === expandedIndex ? null : index);
  // };
  // class App extends React.Component {

  //   eventLogger = (e: MouseEvent, data: Object) => {
  //     console.log('Event: ', e);
  //     console.log('Data: ', data);
  //   };
  const optionsselect = [
    "Markup",
    
    "JavaScript",
    
];   
const [codetype, setcodetype] = useState(optionsselect[1]);

const onOptionChangeHandler = (event) => {
  setcodetype(event.target.value);
  console.log(
      "User Selected Value - ",
      event.target.value
  );
};
  return (
    <div className='top2'>
    <NavPost/>
    <div className="question-form">
   
      
      <h1>What you want to ask or share</h1>
      
        <h5>Title</h5>
        <input
        style={{height:50,width:600}}
          type="text"
          placeholder="Title"
          value={newQuestion.title}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, title: e.target.value })
          }
        />
        <h5>Describe your problem</h5>
        <input
        style={{height:50,width:600}}
          type="text"
          placeholder="Description"
          value={newQuestion.desc}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, desc: e.target.value })
          }
        />

        <h5>Write your code</h5>
        <select onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {optionsselect.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
        <div className="">
        {/*<input
          
          style={{height:300,width:600}}
          width="100%"
          type="text"
          placeholder="code"
          value={newQuestion.tag}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, tag: e.target.value })
          }
        />*/}</div>
        {/*<CodeMirror
                    
                    value={newQuestion.tag}
                    options={options}
                    onBeforeChange={(editor, data, code) => {
                      setNewQuestion({ ...newQuestion, tag: code })  ;
                    }}
                />*/}
                {codetype==='JavaScript' &&<CodeMirror className='width2'

value={newQuestion.tag}

options={options2}

onBeforeChange={(editor, data, value) => {
  editor.showHint({ completeSingle: false });
  setNewQuestion({ ...newQuestion, tag: value });

}}

/>}

{
  codetype==='Markup' &&<div style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
      <textarea
        style={{ width: "100%" }}
        rows={10}
        value={newQuestion.tag}
        onChange={(e) => setNewQuestion({ ...newQuestion, tag: e.target.value })}
      />
      <ReactMarkdown remarkPlugins={[gfm]} children={newQuestion.tag} />
      </div>
}
        <button className="but" onClick={handleSubmitNewQuestion}>Submit</button>
      
      </div>

     
     
      
      
      

    </div>
    
  );
}

export default QuestionForm;