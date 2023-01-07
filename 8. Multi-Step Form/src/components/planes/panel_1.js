import React from "react";
import "./panel.css"
import NextBtn from "./nextBtn";

export default function panel_1(props) {

    function ChangePanel() {
    

        props.UpdatePanel (props.PanelNum+1)
    
    

    }
   
    return (
        <div className="panel-1 panel">
        
        
        <div className="form">
        <h2>Personal Info</h2>
        <p> Please provide your name, email address, and phone number.</p>

        <div className="fields">
            <label> Name
                <input placeholder="e.g. Henok Belachew" type="text" />
            </label>
            <label> Email
                <input placeholder="e.g. example@gmail.com" type="email" />
            </label>
            <label> Phone Number
                <input placeholder="e.g. +251 9546 23" type="number" />
            </label>
        </div>
        </div>
        
    

        <div className="low-btns">

        <span></span>
        <button onClick={ChangePanel} id="btn">Next Step</button>
        </div>
        
    
           
        </div>
    )
}