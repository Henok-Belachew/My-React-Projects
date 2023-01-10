import React from "react";
import "./panel.css"
import AddOns from "./add-on";


export default function panel_3(props) {


    // fetching the passed data through props

    const addons = props.Data.map(
        (item)=> {
            return (
                <AddOns 
                id = {item.id}
                selected={item.selected}
                feature={item.feature} 
                discription={item.discription}
                userData={props.Data}
                
                // passing necessesary states and their methods

                // passing the state of each add-ons
                onlineService = {props.onlineService}
                largeStorage= {props.largeStorage}
                customProfile = {props.customProfile}

                // passing state methods of each add-ons state

                setOnline ={props.setOnline}
                setLarge = {props.setLarge}
                setCustom = {props.setCustom}

                addOns = {props.addOns}
                />
            )
        }
    )

    console.log(props.Data)

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

            
           {addons}

        </div>
        </div>

        <div className="low-btns">

        <span onClick={goBack}>Go Back</span>
        <button onClick={ChangePanel} id="btn">Next Step</button>
        </div>
        </div>
    )
}