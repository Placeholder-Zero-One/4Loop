import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './Components/Card';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from './Components/Sidebar.js';
import './CSS/Home.css';

function Home() {
  const { getAccessTokenSilently } = useAuth0();
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [previewPost, setPreviewPost] = useState({
    title: '',
    caption: '',
    media: null,
  });
  const [mediaPostImage, setMediaPostImage] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/upload');
      const postsData = response.data;
      setPosts(postsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  const handleCloseCreatePost = () => {
    setShowCreatePost(false);
    setPreviewPost({
      title: '',
      caption: '',
      media: null,
    });
    setMediaPostImage(null);
  };

  const handlePreviewUpdate = (event) => {
    const { name, value } = event.target;
    setPreviewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setMediaPostImage(file);

      setPreviewPost((prevState) => ({
        ...prevState,
        media: URL.createObjectURL(file),
      }));
    }
  };

  const submitPost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', previewPost.title);
      formData.append('caption', previewPost.caption);
      formData.append('likes', 0);
      formData.append('file', mediaPostImage);

      const accessToken = await getAccessTokenSilently({ prompt: 'consent' });

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset the state variables
      setShowCreatePost(false);
      setPreviewPost({
        title: '',
        caption: '',
        media: null,
      });
      setMediaPostImage(null);

      // Refetch the posts
      fetchPosts();
    } catch (error) {
      console.error(error);
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

        {/* Render CardComponent */}
        <CardComponent posts={posts} />

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
                  id="postCaption"
                  name="caption"
                  placeholder="Enter caption"
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
                <button className="Hcreate-post-submit" onClick={submitPost}>
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
        {previewPost.title || previewPost.caption || previewPost.media ? (
          <div className="HPcreate-post-modal HPpreview-modal">
            <div className="HPcreate-post-content">
              <h2>Preview</h2>
              <div className="HPform-group">
                <h3>{previewPost.title}</h3>
                {previewPost.media && <img src={previewPost.media} alt="Preview" />}
                <p>{previewPost.caption}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
