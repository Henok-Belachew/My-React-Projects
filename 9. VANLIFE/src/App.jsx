import React from "react";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import Data from "./API";
import './index.css'
import './vans.css'
// import { About, Vans } from "./Components";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



export default function App () {

    
    return (
        
        
        <div className="main">
            <BrowserRouter>
        <nav>
            <Link to="/"><h2>#VANLIFE</h2></Link>   
            <ul>
                
                <Link to="/vans"><li>Vans</li></Link>   
                <Link to="/about"><li>About</li></Link>   
            </ul>
        </nav>
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/vans" element={<Vans/>}></Route>
        </Routes>
        </BrowserRouter>
        <footer>
            <span>&copy; 2023 #VANLIFE</span>
        
        </footer>
        </div>
        
        

        
    )
}