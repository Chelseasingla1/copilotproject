import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import "./FindQuestion.css";
import Draggable from 'react-draggable';

function FindQuestion() {
  const [questions, setQuestions] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    tag: '',
    desc: '',
    date: '', // Add date field
  });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const userQuestionsRef = collection(db, 'questions');
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await getDocs(userQuestionsRef);
      const questionData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQuestions(questionData);
      setFilteredQuestions(questionData);
    };
    getQuestions();
  }, []);

  const handleFilter = () => {
    const filteredQuestions = questions.filter(
      (question) =>
        question.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        question.tag.toLowerCase().includes(filterTag.toLowerCase())
    );
    setFilteredQuestions(filteredQuestions);
  };

  const handleDeleteQuestion = async (id) => {
    await deleteDoc(doc(db, 'questions', id));
    const updatedQuestions = filteredQuestions.filter((question) => question.id !== id);
    setFilteredQuestions(updatedQuestions);
  };

  const handleSubmitNewQuestion = async () => {
    // Add the current date to the new question
    const currentDate = new Date().toLocaleDateString();
    const questionWithDate = { ...newQuestion, date: currentDate };

    await addDoc(collection(db, 'questions'), questionWithDate);
    setFilteredQuestions([...filteredQuestions, questionWithDate]);
    setNewQuestion({ title: '', tag: '', desc: '', date: '' });
  };

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  // class App extends React.Component {

  //   eventLogger = (e: MouseEvent, data: Object) => {
  //     console.log('Event: ', e);
  //     console.log('Data: ', data);
  //   };
         
  return (
    <div className="find-question">
      <h1>Filter Questions</h1>
      <div className='filter'>
      <h1>Questions</h1>
      {filteredQuestions.map((question, index) => (
  // <Draggable key={question.id} draggableId={question.id} index={index}>
    
  //     <div
  //       className="card draggable-container"
  //     >
  //        <div>
  //         <h2>Question: {index + 1}</h2>
  //         <h2>Title: {question.title}</h2>
  //         <p>Date: {question.date}</p>
  //         <button onClick={() => handleDeleteQuestion(question.id)}>Delete</button>
  //         <button onClick={() => handleExpand(index)}>
  //           {expandedIndex === index ? 'Collapse' : 'Expand'}
  //         </button>
  //         {expandedIndex === index && (
  //           <div>
  //             <h3>More Details:</h3>
  //             <p>Description: {question.desc}</p>
  //             <p>Tag: {question.tag}</p>
  //           </div>
      
  //     )}
  //     </div>
  //   </div>
  // </Draggable>
  <></>
  ))}

        <h5>Title:</h5>
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />

        <h5>Tag:</h5>
        <input
          type="text"
          placeholder="Filter by tag"
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      <h1>Add New Question</h1>
      <div className='new-question'>
        <h5>Title:</h5>
        <input
          type="text"
          placeholder="Title"
          value={newQuestion.title}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, title: e.target.value })
          }
        />
        <h5>Description:</h5>
        <input
          type="text"
          placeholder="Description"
          value={newQuestion.desc}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, desc: e.target.value })
          }
        />

        <h5>Tag:</h5>
        <input
          type="text"
          placeholder="Tag"
          value={newQuestion.tag}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, tag: e.target.value })
          }
        />
        <button onClick={handleSubmitNewQuestion}>Submit</button>
      </div>

      <h1>Questions</h1>
      {filteredQuestions.map((question, index) => (
      <Draggable>

        <div className="card draggable-container" key={question.id}>
          <h2>Question: {index + 1}</h2>
          <h2>Title: {question.title}</h2>
          <p>Date: {question.date}</p> {/* Display the date */}
          <button onClick={() => handleDeleteQuestion(question.id)}>Delete</button>
          <button onClick={() => handleExpand(index)}>
            {expandedIndex === index ? 'Collapse' : 'Expand'}
          </button>
          {expandedIndex === index && (
            <div>
              <h3>More Details:</h3>
              <p>Description: {question.desc}</p>
              <p>Tag: {question.tag}</p>
            </div>
          )}
        </div>
        
      </Draggable>
      ))}
      
      
      

    </div>
    
  );
}

export default FindQuestion;