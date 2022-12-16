import React from "react";
// import Img1 from './img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';


export default function Card (props){

    let i = 0;
    
    
    return (
        <div className="main">

        
            <img src={ props.Img } className="img" alt="" />
            {console.log(props.Img)}
           
      

            {/* The lower part */}
            <div className="detail">
                <span className="upper"><i class="fa-solid fa-star"></i>{props.rating} <span className="country">- {props.location}</span> </span>
                <p className="host">{props.discription}</p>
                <p className="price">From ${props.price}/person</p>
            </div>

            {/* label */}
            {props.openStatus === 0 && <span className="label"> SOLD OUT </span>}
        
        </div>
    )
        
    
}