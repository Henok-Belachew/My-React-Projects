import React from "react";
import "./panel.css"

export default function panel_4(props) {
    function ChangePanel() {

        props.UpdatePanel (props.PanelNum+1)

    }
    function goBack () {
        props.UpdatePanel (props.PanelNum-1)
    }
    return (
        <div className="panel-4 panel">

        <div className="form">
        <h2>Finishing up</h2>
        <p> Double-check everything looks OK before confirming.
        </p>
        </div>

        <div className="plans">
            
        </div>
        <div className="low-btns">

<span onClick={goBack}>Go Back</span>
<button onClick={ChangePanel} id="btn">Confirm</button>
</div>
        </div>
    )
}