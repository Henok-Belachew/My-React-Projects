import React from "react";
import "./styles.css/footer.css"
import logo from "./images/logowhite.svg"
import fb from "./images/icon-facebook.svg"
import insta from "./images/icon-instagram.svg"
import twitter from "./images/icon-twitter.svg"
import youtube from "./images/icon-youtube.svg"
import pinterest from "./images/icon-pinterest.svg"

export default function Footer (){
    return (
        <div className="footer">
<div className="box box1">
    <img src={logo} alt="" />

    <div className="social-icons">
        <img className="icns" src={fb} alt="" />
        <img className="icns" src={insta} alt="" />
        <img className="icns" src={twitter} alt="" />
        <img className="icns" src={youtube} alt="" />
        <img className="icns" src={pinterest} alt="" />
    </div>
</div>
<div className="box">
    <ul>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a></li>
        
    </ul>
</div>
<div className="box b3">
<ul>
        <li><a href="">Careers</a></li>
        <li><a href="">Suport</a></li>
        <li><a href="">Privacy</a></li>
        
    </ul>
</div>
<div className="box box4">
<button id="invite-btn" className="text-sm footer-btn  p-3 px-8 rounded text-white bg-green-500"> Request Invite </button>

<h3 id="copyright">© Easybank. All Rights Reserved</h3>
</div>
        </div>
    )
}