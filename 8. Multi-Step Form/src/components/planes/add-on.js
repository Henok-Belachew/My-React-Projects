import React from "react";
import { useState } from "react";

export default function AddOns(props) {

    const id = props.id
    console.log(props.id+1)
    console.log("sum of id")
    // var checkStatus = false

    const [checkStatus, setStatus] = useState(false)
    const style = {

      
        border:  checkStatus ? "#473dff solid 1px" : "",
        backgroundColor: checkStatus ? "#f8f9fe" : ""
        // backgroundColor: props.addOns[props.id].status ?"#f8f9fe" : ""
    }

    
    function checker () {

        setStatus(!checkStatus)
        console.log(checkStatus)
    }

   
    
    return (
        <div style={style} className="adds">
                <input 
                 
                    onChange={checker}
                type="checkbox" />

                <div className="adds-info">
                    <h3>{props.feature}</h3>
                    <p>{props.discription}</p>
                </div>

                <h3 className="price-3">
                    +${true && props.userData[props.id].monPrice} 
                    {true && "/mo"}
                    {false && props.userData[props.id].yrPrice}
                    {false && "/yr"}
                </h3>
            </div>
    )
}