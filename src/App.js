import React from "react"
import './App.css';
import { useState } from "react"
import Navbar from "./navbar.js"
import CarouselF from "./carousels"
import BlogData from "./BlogData.json"
import {
  Routes,
  Route,
} from "react-router-dom";
import Posts from "./posts"

function App() {
  const [userlogin, userloginFunction] = useState(0)
  return (
    <div>
      <Navbar userlogin={userlogin} userloginFunction={userloginFunction} />
        <Routes>
          <Route exact path="/" element={<CarouselF BlogData={BlogData} />} >
            </Route>
            <Route path="/posts" element={<Posts />} >
            </Route>
        </Routes>
    </div>
  )
}

export default App;
