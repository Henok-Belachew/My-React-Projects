import React from "react";
import "./panel.css"
import NextBtn from "./nextBtn";

export default function panel_1(props) {

    // Changing panels
    function ChangePanel() {
    
        props.UpdatePanel (props.PanelNum+1)
        updateStep_1()
    }

    // Setting the values of input fields from state

    // Getting the value of the user data fron input fields
    const step_1 = []
    function setName (event) {

       
            step_1[0] = event.target.value
       
        
    }

    function setEmail (event) {
      

            step_1[1] = event.target.value 

        
       
        
    }

    function setPhone (event) {
  
            step_1[2] = event.target.value
        
        
    }

    // Passing the user data to the states

    function updateStep_1(){

        if (  step_1[0] !== undefined  ) {
        props.updateStep_1(step_1)
        }
    }

    
   
    return (
        <div className="panel-1 panel">
        
        

        <div className="form">
        <h2>Personal Info</h2>
        <p> Please provide your name, email address, and phone number.</p>

        <div className="fields">
            <label> Name
                <input onChange={setName}  placeholder={props.name} type="text" />
            </label>
            <label> Email
                <input onChange={setEmail} placeholder={props.email} type="email" />
            </label>
            <label> Phone Number
                <input onChange={setPhone} placeholder={props.Phone_Number}type="number" />
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