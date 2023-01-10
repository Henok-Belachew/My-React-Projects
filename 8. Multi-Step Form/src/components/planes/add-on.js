import React from "react";

export default function AddOns(props) {

    const id = props.id
    console.log(props.id+1)
    console.log("sum of id")
    const checkStatus = false
    const style = {

      
        border:  props.addOns[props.id].status ? "#473dff solid 1px" : "",
        // backgroundColor: checkStatus ?"#f8f9fe" : ""
        backgroundColor: props.addOns[props.id].status ?"#f8f9fe" : ""
    }

    
    function checker () {

        if (props.addOns[props.id].status ) {
            checkStatus = "checked"
        }
        else  {
            checkStatus = ""
        }
        
    }

    function changeStatus () {
        checkStatus = true
    }
    
    return (
        <div style={style} className="adds">
                <input 
                 
                    onChange={changeStatus}
                type="checkbox" />

                <div className="adds-info">
                    <h3>{props.feature}</h3>
                    <p>{props.discription}</p>
                </div>

                <h3 className="price-3">
                    ${false && props.userData[props.id].monPrice} 
                    {false && "/mo"}
                    {true && props.userData[props.id].yrPrice}
                    {true && "/yr"}
                </h3>
            </div>
    )
}