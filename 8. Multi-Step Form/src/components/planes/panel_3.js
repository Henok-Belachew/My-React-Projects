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

        <div className="add-ons">

            {/* add-ons 1 */}
            <div className="adds">
                <input type="checkbox" />

                <div className="adds-info">
                    <h3>Online Serivce</h3>
                    <p>Acces to multiplayer games</p>
                </div>

                <h3 className="price-3">+$2/mo</h3>
            </div>

            {/* add-ons 2 */}
            <div className="adds">
                <input type="checkbox" />

                <div className="adds-info">
                    <h3>Larger Storage</h3>
                    <p>Extra 1TB cloud save</p>
                </div>

                <h3 className="price-3">+$2/mo</h3>
            </div>
            {/* add-ons 3 */}
            <div className="adds">
                <input type="checkbox" />

                <div className="adds-info">
                    <h3>Custimizable Profile</h3>
                    <p>Custom theme on your profile</p>
                </div>

                <h3 className="price-3">+$2/mo</h3>
            </div>
        </div>
        </div>

        <div className="low-btns">

        <span onClick={goBack}>Go Back</span>
        <button onClick={ChangePanel} id="btn">Next Step</button>
        </div>
        </div>
    )
}