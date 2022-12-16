import React from "react";
import Card from './components/Card'
import Header from "./components/Header";
import Data from './components/external'
import './components/Card.css';
import Nav from "./components/nav";
import landing from "./images/landing.png"

export default function App () {

    const data = Data.map((item) => {
        return <Card {...item}/>
    }
        

    )

    return (
        <>
        <Nav />
        <img className="landing" src={landing} alt="" />

        <div className="lower">
            <Header />

            <div className="cards">
                {data}
            </div>
        </div>
        
        </>
    
    
        )

        
    
    
   
}