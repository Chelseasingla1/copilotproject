import React, { useState } from 'react';
import './ArticleForm.css';
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Image from './Image'; // Assuming Image.js is in the same directory

function ArticleForm() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [article, setArticle] = useState("");
  const [tag, setTag] = useState("");

  const userCollectionRef = collection(db, "article");

  const writeUserData = async () => {
    await addDoc(userCollectionRef, { title, abstract, article, tag });
    alert("Data Uploaded!");
  };

  return (
    <div className="article-form">
      <div className="img">
        <h2>Add an image:</h2>
        <Image />
      </div>
      <div className='article-header'>
        <h2>What do you want to share?</h2>
        <div className='title'>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className='abstract'>
          <label>Abstract:</label>
          <input
            type="text"
            placeholder="Enter article abstract"
            value={abstract}
            onChange={(event) => setAbstract(event.target.value)}
          />
        </div>
        <div className='article'>
          <label>Article Text:</label>
          <textarea
            placeholder="Enter article text"
            value={article}
            onChange={(event) => setArticle(event.target.value)}
          />
        </div>
        <div className='tag'>
          <label>Tags:</label>
          <input
            type="text"
            placeholder="Enter tags"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          />
        </div>
        <button onClick={writeUserData} className="button">Post</button>
      </div>
    </div>
  );
}

export default ArticleForm;