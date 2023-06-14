import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Posts from './Components/Posts';
import { useAuth0 } from "@auth0/auth0-react";

import Sidebar from './Components/Sidebar.js';
import './CSS/Home.css';

function Home() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [previewPost, setPreviewPost] = useState({
    title: '',
    content: '',
    image: null,
  });
  const [mediaPostImage, setMediaPostImage] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  const handleCloseCreatePost = () => {
    setShowCreatePost(false);
  };

  const handlePreviewUpdate = (event) => {
    const { name, value } = event.target;
    setPreviewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpload = async (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(e.target.files[0]);
      setMediaPostImage(file);
      setPreviewPost((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };
  

  const SubmitPost = async (event) => {
    try {
      const formData = new FormData();
      formData.append('file', mediaPostImage);
  
      const response = await axios.post("http://localhost:3001/upload", formData, {
        usersId: 'jaredp',
        Title: previewPost.title,
        like: 2,
        content: previewPost.content,
      });
  
      setPreviewPost((prevState) => ({
        
        ...prevState,
        image: URL.createObjectURL(mediaPostImage),
      }));
  
      console.log(response);
      console.log('Submit button clicked');
    } catch (error) {
      console.error(error);
    } finally {
      handleCloseCreatePost();
    }
  };  

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  return (
    <div className="Home">
      <Sidebar />
      <div className="Hmain">
        <h1>CodeCrew Blog</h1>
        <button className="Hcreate-post-button" onClick={handleCreatePost}>
          Create Post
        </button>

        {/* Existing posts rendering code */}
        {posts.map((post) => (
          <Posts key={post.id} post={post} handleShow={handleCreatePost} />
        ))}

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="Hcreate-post-modal">
            <div className="Hcreate-post-content">
              <div className="Hform-group">
                <input
                  type="text"
                  id="postTitle"
                  name="title"
                  placeholder="Enter title"
                  onChange={handlePreviewUpdate}
                />
              </div>

              <div className="Hform-group">
                <textarea
                  id="postContent"
                  name="content"
                  placeholder="Enter content"
                  onChange={handlePreviewUpdate}
                ></textarea>
              </div>

              <div className="Hform-group Hbutton-group">
                <div className="Hbutton-wrapper">
                  <button className="Hupload-button">Upload</button>
                  <input
                    type="file"
                    id="postImage"
                    name="image"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </div>
                <button className="Hcreate-post-submit" onClick={SubmitPost}>
                  Submit
                </button>

              </div>
            </div>
            <button className="Hcreate-post-close" onClick={handleCloseCreatePost}>
              x
            </button>
          </div>
        )}

{/* Preview Modal */}
{(previewPost.title || previewPost.content || previewPost.image) && (
  <div className="HPcreate-post-modal HPpreview-modal">
    <div className="HPcreate-post-content">
      <h2>Preview</h2>
      <div className="HPform-group">
        <h3>{previewPost.title}</h3>
        {previewPost.image && (
          <img src={URL.createObjectURL(previewPost.image)} alt="Preview" />
        )}
        <p>{previewPost.content}</p>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default Home;
