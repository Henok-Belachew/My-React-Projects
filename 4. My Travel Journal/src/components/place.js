import React from "react";
// import img from '../images/img1.png'

export default function Place (props) {
    return (
        <div className="container">
            <img className="img" src={props.imageUrl} alt="" />
            <div className="rightside">

                <div className="upper">
                    <span className="top">
                        <span className="location"> <i class="fa-solid fa-location-dot"></i> {props.location.toUpperCase()} </span> 
                        
                        <a className="googlemap" href={props.googleMapUrl}>View on Google Maps</a>
                        

                        <h2>{props.title}</h2>
                    </span>
                </div>

                <div className="lower">
                    <span className="date">{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>
                
            </div>
        </div>
    )
}