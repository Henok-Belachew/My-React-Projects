import React from "react";
import './app.css'
import Place from "./components/place";
import Data from './components/data'

export default function App () {
    const place = Data.map((item)=>{
        return (
        <><Place {...item} />
        {item.id < 3 && <hr id="line" />}
        </>)
    })
    return (
        <>
        <div className="header">
            <span> <i class="fa-solid fa-earth-africa"></i> My Travel Journal</span>
        </div>
        <div className="places">
            {place}
            
        </div>
        
        
        </>
    )
}