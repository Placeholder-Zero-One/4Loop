import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
