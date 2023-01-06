import React from "react";
import "./styles.css/landing.css"
import bgSVG from "./images/bg-intro-desktop.svg"
import MockUp from "./images/image-mockups.png"
export default function Landing () {
    return (
        <><div className="landing">
            <div className="left">
                <h1 className="">
                    Next generation <br /> digital banking
                </h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.</p>

                <button id="invite-btn" className="text-sm  p-3 px-8 rounded text-white bg-green-500"> Request Invite </button>
            </div>
            <div className="right">

                <img id="ln-bg" src={bgSVG} alt="" />
            </div>
        </div><img id="mockup" src={MockUp} alt="" /></>
    )
}