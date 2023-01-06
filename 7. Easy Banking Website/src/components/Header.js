import React from "react";
import "./styles.css/header.css"
import Logo from "./images/logo.svg"


export default function Header() {
    return (
        <header className=" ">
            <img src={Logo} alt="" />
            
            {/* Navigation */}
            <ul className="flex gap-5 text-sm opacity-60">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>

            </ul>

            {/* Header Button */}
            <button id="invite-btn" className="text-sm  p-3 px-8 rounded text-white bg-green-500"> Request Invite </button>

        </header>
    )
}