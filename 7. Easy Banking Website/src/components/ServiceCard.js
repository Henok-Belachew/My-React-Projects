import React from "react";
import icon from "./images/icon-online.svg"

export default function ServiceCard (props) {
    return (

        <div className="serCard">
            <img src={props.icon} alt="" />

            <h2>{props.title}</h2>

            <p>
            {props.discription}
            </p>
            
        </div>
    )
}