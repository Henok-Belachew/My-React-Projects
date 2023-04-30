import React from 'react'

import { useEffect, useState } from 'react'



export default function Van (props) {

    const [style, setStyle] = useState ({})

    function updateStyle () {
        if (props.type === "simple") {
            setStyle({backgroundColor: props.type == "simple" && "#E17654"})
        }
        else if (props.type === "luxury") {
            setStyle({backgroundColor: props.type == "luxury" && "#161616"})
        }
        else if (props.type === "rugged") {
            setStyle({backgroundColor: props.type == "rugged" && "#115E59"})
            
        }
    }
    useEffect(() => {
        updateStyle();
      }, []); // <- add empty brackets here

    return (
        <div className="van">
                    <img className="van-img " src={props.img} alt="" />
                    <div className="btm">
                        <h2>{props.name}</h2>
                        <h2>{props.price} <span>/day</span> </h2>
                    </div>
                    <span style={ style } className="van-typ">{props.type}</span>   
        </div>
    )
}