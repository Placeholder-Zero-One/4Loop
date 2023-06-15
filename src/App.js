import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Home from './Home';
import './CSS/App.css';
import Posts from './Components/Posts';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/Posts" element={<Posts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
