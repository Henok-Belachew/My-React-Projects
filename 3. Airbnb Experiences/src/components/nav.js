import React from "react";
import logo from '../images/logo.png'

export default function Nav () {
    return (
        <div className="nav">
            <img src={logo} alt="" /> 

            <div className="navs">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Products</a>
                
            </div>
        </div>
    )
}