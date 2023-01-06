import React from "react";
import pic from "./images/image-currency.jpg"

export default function ArticleCard(props) {
    return (
        <div className="ArticleCard">
           
           <img src={props.path} alt="" />

           <div className="lower">
           <h4>{props.author}</h4>

<h3> {props.title}</h3>
<p> {props.paragraph}</p>

           </div>
            
  </div>

    )
}