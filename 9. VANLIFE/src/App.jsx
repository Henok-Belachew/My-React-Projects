import React from "react";
import {Home, About, Vans } from "./Components";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



export default function App () {
    return (
        <BrowserRouter>
        
        <div className="main">
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
        <footer>
            <span>&copy; 2023 #VANLIFE</span>
        
        </footer>
        </div>
        </BrowserRouter>
        

        
    )
}