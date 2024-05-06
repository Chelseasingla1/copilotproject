import React, { useState } from 'react';
import './ArticleForm.css';
//import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { imageDb } from "./Firebase";
import { firestoreDb } from "./Firebase";

import Image from './Image'; // Assuming Image.js is in the same directory
import { useNavigate, Link, Outlet } from "react-router-dom";
import NavPost from './NavPost';

function ArticleForm() {
//   const [title, setTitle] = useState("");
//   const [abstract, setAbstract] = useState("");
//   const [article, setArticle] = useState("");
//   const [tag, setTag] = useState("");

//   // const [title, setTitle] = React.useState('');
//   // const [abstract1, setAbstract1] = React.useState('');
//   // const [abstract2, setAbstract2] = React.useState('');
//   // const [tags, setTags] = React.useState('');
//   const [img, setImg] = React.useState(null);
//   const [imgFileName, setImgFileName] = React.useState('');

//   const handlePost = async (imagePath) => {
//     // Create a new document in Firestore collection
//     try {
//       const docRef = await addDoc(collection(firestoreDb, 'articles'), {
//         // title,
//         // abstract1,
//         // abstract2,
//         // tags,
//         title, abstract, article, tag,    imgFileName,imagePath, 

//         // Add other fields as needed
//       });
//       console.log('Document written with ID:', docRef.id);

//       // Optionally, reset the form or perform any other necessary actions.
//       // For example, you can clear input fields after posting.

//     } catch (error) {
//       console.error('Error adding document:', error);
//       // Provide user-friendly error feedback if needed
//     }
//   };
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImg(file);
//     setImgFileName(file.name); // Set the selected file name
//   };
//   const handleUpload = () => {
//     if (img) {
//       const imagePath = `files/${v4()}`; 
//       const imgRef = ref(imageDb, imagePath);
//       uploadBytes(imgRef, img)
//         .then((snapshot) => {
//           console.log('Image uploaded:', snapshot);
//           handlePost(imagePath);
//           // You can do something after the image is uploaded, e.g., save the image URL to the database
//         })
//         .catch((error) => {
//           console.error('Error uploading image:', error);
//           // Provide user-friendly error feedback if needed
//         });
//     }
//   };






//   // const userCollectionRef = collection(db, "article");

//   // const writeUserData = async () => {
//   //   await addDoc(userCollectionRef, { title, abstract, article, tag });
//   //   alert("Data Uploaded!");
//   // };

//   return (
//     <div className="toph">
//     <NavPost/>
//     <div className="article-form">
    
//       <div className="img">
//         <h2>Add an image:</h2>
//         <Image />
//       </div>
//       <div className='article-header'>
//         <h2>What do you want to share?</h2>
//         <div className='title'>
//           <label>Title:</label>
//           <input
//             type="text"
//             placeholder="Enter title"
//           //  onChange={(e) => setTitle(e.target.value)}

//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//           />
//         </div>
//         <div className='abstract'>
//           <label>Abstract:</label>
//           <input
//             type="text"
//             placeholder="Enter article abstract"
//             value={abstract}
//             onChange={(event) => setAbstract(event.target.value)}
//           />
//         </div>
//         <div className="input-container">
//         <label className="Title-label">Add an image:</label>
//         <input
//           type="file"
//           id="image"
//           onChange={handleImageChange}

//         />
//   {(
//           <input
//             type="text"
//             className="selected-file-input"
//             value={imgFileName}
//             readOnly
//           />
//         )}

// <div className="button-container">
//           <label htmlFor="image" className="title-button" id="browseButton">
//             Browse
//           </label>
//           <br />
//           <button className="title-button" id="uploadButton" onClick={handleUpload}>
//             Upload
//           </button>

//         </div>
//         </div>
//       <hr />



//         <div className='article'>
//           <label>Article Text:</label>
//           <textarea
//             placeholder="Enter article text"
//             value={article}
//             onChange={(event) => setArticle(event.target.value)}
//           />
//         </div>
//         <div className='tag'>
//           <label>Tags:</label>
//           <input
//             type="text"
//             placeholder="Enter tags"
//             value={tag}
//             onChange={(event) => setTag(event.target.value)}
//           />
//         </div>
//         <button onClick={handlePost} className="Button">Post</button>
//       </div>
//     </div>
//     </div>
//   );
// }










// import React from 'react';
// import { ref, uploadBytes } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";
// import { v4 } from "uuid";
// import { imageDb } from "./firebase";
// import { firestoreDb } from "./firebase";
// import './ArticleSection.css';

// function ArticleSection() {
  const [title, setTitle] = React.useState('');
  const [abstract1, setAbstract1] = React.useState('');
  const [abstract2, setAbstract2] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [img, setImg] = React.useState(null);
  const [imgFileName, setImgFileName] = React.useState('');

  const handlePost = async () => {
    // Create a new document in Firestore collection
    try {
      const docRef = await addDoc(collection(firestoreDb, 'articles'), {
        title,
        abstract1,
        abstract2,
        tags,

        // Add other fields as needed
      });
      console.log('Document written with ID:', docRef.id);
 // Optionally, reset the form or perform any other necessary actions.
      // For example, you can clear input fields after posting.

    } catch (error) {
      console.error('Error adding document:', error);
      // Provide user-friendly error feedback if needed
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
    setImgFileName(file.name); // Set the selected file name
  };
  const handleUpload = () => {
    if (img) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, img)
        .then((snapshot) => {
          console.log('Image uploaded:', snapshot);
          // You can do something after the image is uploaded, e.g., save the image URL to the database
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          // Provide user-friendly error feedback if needed
        });
    }
  };
  return (
    <div className="questionSection">
      <label className="questionLabel">What do you want to ask or share</label>
      <div className='input-container'>
        <label className="Title-label">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a descriptive title"
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
      </div>
      <div className="input-container">
        <label className="Title-label">Add an image:</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}

        />
 {(
          <input
            type="text"
            className="selected-file-input"
            value={imgFileName}
            readOnly
          />
        )}
        <div className="button-container">
          <label htmlFor="image" className="title-button" id="browseButton">
            Browse
          </label>
          <br />
          <button className="title-button" id="uploadButton" onClick={handleUpload}>
            Upload
          </button>

        </div>
        </div>
      <hr />
      <label className='abstract-label'>Abstarct</label>
      <textarea
        id="problem-1"
        className="abstract-input"
        placeholder='Enter a 1-paragraph abstarct'
        rows="7"
        onChange={(e) => setAbstract1(e.target.value)}
      />
      <hr />
      <label className='abstract-text-label'>Abstarct Text</label>
      <textarea
        id="problem-2"
        placeholder='Enter a 1-paragraph abstarct'
        className="abstract-text-input"
        rows="7"
        onChange={(e) => setAbstract2(e.target.value)}
      />
      <hr />
      <div className='tags-area'>
        <label className='tags'>Tags</label>
        <input
          type="text"
          id="tags"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          className="tags-input"
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button className="post-button" onClick={handlePost}>Post</button>
    </div>
  );
}


export default ArticleForm;