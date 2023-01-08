import React from "react";

export default function Plan(props) {
    return(
        <div className="plan">
            <img src={props.icon} alt="" />
            <span className="plan-detail">
                <h2>{props.plan}</h2>
                {props.planType ? false : true && <span className="plan-price">{props.monthly}</span>}
                {props.planType && <span className="plan-price">{props.yearly}</span> }

                {props.planType && <span className="free">2 months free</span>}

                
                
            </span>
        </div>
    )
}