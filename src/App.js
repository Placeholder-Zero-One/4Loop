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
import "./App.css"

function App() {
  const [userlogin, userloginFunction] = useState(0)
  const [showscroll,showscrollFunction] = useState(false)
  return (
    <div 
    className="App">
      <Navbar
      showscrollFunction={showscrollFunction}
        userlogin={userlogin}
        userloginFunction={userloginFunction}
      />
      <Routes>
      
        <Route
          exact path="/"
          element={<CarouselF BlogData={BlogData}
          />}
        >
        </Route>
        {userlogin % 2 !== 0 ? (
          <Route
            path="/posts"
            element={<Posts showscroll={showscroll} />}
          />
        )
          :
          (
            <Route
              path="/posts"
              element={
                <div style={{
                  width:"100%",
                  height:"100vh",
                  overflowY:"hidden",
                  display:"flex",
                  alignItems:"center",
                  border:"1px solid rgb(0, 1, 82)",
                  backgroundColor:"rgb(122, 1, 1)",
                  }} >
                  <h1 style={{
                  border:"10px solid rgb(0, 1, 82)",
                  backgroundColor:"green",
                  padding:"10px",
                  color:"hsl(60, 74%, 50%)",
                  width:"100%",
                  textAlign:"center"
                  
                  }}>
                    Sign in to see posts !!!
                  </h1>
                  <style>
                              {`
                                ::-webkit-scrollbar {
                                    display: none;
                                  } 
                              `}
                            </style>
                </div>
              }
            />
          )}
      </Routes>
    </div>
  )
}

export default App;
