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
        <div className="summary">
            <div className="summaryinner">
                <div className="upper">
                    <span> 
                        <h4>Acrade (Monthly)</h4>
                        <a href="#">Change</a>
                    </span>
                        <h5>$9/mon</h5>
                </div>
                <div className="lower">
                    <hr />
                    <span className="row">
                        <span>Online service </span>
                        <span>+$1/mo</span>
                    </span>
                    <span className="row">
                        <span>Online service </span>
                        <span>+$1/mo</span>
                    </span>
                </div>
            </div>
            <span className="total"> <h5>Total(per month)</h5> <h5>+$12/mo</h5></span>
           
        </div>
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