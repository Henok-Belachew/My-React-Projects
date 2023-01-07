import React from "react";
import "./panel.css"
import NextBtn from "./nextBtn";


export default function panel_3(props) {
    function ChangePanel() {

        props.UpdatePanel (props.PanelNum+1)

    }
    function goBack () {
        props.UpdatePanel (props.PanelNum-1)
    }
    return (
        <div className="panel-3 panel">
<div className="form">
        <h2>Pick add-ons</h2>
        <p> Add-ons help enhance your gaming experience.
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