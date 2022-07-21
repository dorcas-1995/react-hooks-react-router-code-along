import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import Navbar from "./component/Navbar";


function App(){
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App

