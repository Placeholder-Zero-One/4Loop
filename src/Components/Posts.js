import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../CSS/Home.css';

function Posts({ handleShow }) {
  const [show, setShow] = useState(false);
  const [Title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [Upload, setUpload] = useState('');
  const [index, setIndex] = useState(0);
  const [photoBlob, setPhotoBlob] = useState('');

  const handleClose = () => setShow(false);
  const handleShowCreatePost = () => {
    setShow(true);
    handleShow(); // Invoke the handleShow function passed from the Home component
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log('Title', event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    console.log('Content', event.target.value);
  };

  const handleUploadChange = (event) => {
    setUpload(event.target.files[0]);
    console.log('Upload', event.target.files[0]);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmitPost = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append('photo', Upload);

      const photoBase64 = await getBase64(Upload);

      const response = await axios.post('http://localhost:3001/blogs', {
        usersId: 'jaredp',
        Title,
        like: 2,
        content,
        media: { blob: photoBase64 },
      });

      console.log('Submit button clicked');
      // handleSubmitPost(event); // Invoke the handleSubmitPost function passed from the Home component
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Hposts">
      <Button className="Hbutton" variant="primary" onClick={handleShowCreatePost}>
        Create Blog
      </Button>
      <form onSubmit={handleSubmitPost}>
        <input type="text" value={Title} onChange={handleTitleChange} placeholder="Enter title" />
        <textarea value={content} onChange={handleContentChange} placeholder="Enter content" />
        <input type="file" onChange={handleUploadChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Posts;
