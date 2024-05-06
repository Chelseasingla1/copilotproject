import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import './Image.css';

function ImageUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload === null) return;
    const uniqueFileName = `${uuidv4()}_${imageUpload.name}`;
    const imageRef = ref(storage, `images/${uniqueFileName}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded!");
    });
  };
  return (
    <div className="image-container">
      <h2>Add an Image:</h2>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}

export default ImageUpload;