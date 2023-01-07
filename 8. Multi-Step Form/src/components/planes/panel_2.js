import React from "react";
import "./panel.css"
import NextBtn from "./nextBtn";

export default function panel_2 (props) {
    function ChangePanel() {

        props.UpdatePanel (props.PanelNum+1)

    }
    function goBack () {
        props.UpdatePanel (props.PanelNum-1)
    }
    return (
        <div className="panel-2 panel">

<div className="form">
        <h2>Select your plan</h2>
        <p> You have the option of monthly or yearly billing.
</p>

        <div className="plans">
            
        </div>
        </div>

        <div className="low-btns">

        <span onClick={goBack}>Go Back</span>
        <button onClick={ChangePanel} id="btn">Next Step</button>
        </div>
        </div>
    )
}