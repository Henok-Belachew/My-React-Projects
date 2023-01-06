import React from "react";
import ServiceCard from "./ServiceCard";
import "./styles.css/services.css"
import listCard from "./ServicesData";
import Icon_1 from "./images/icon-online.svg"

export default function Services () {
    const card = listCard.map((item)=>{
        return (
<ServiceCard icon={item.icon} title={item.title} discription={item.discription}/>
        )
    })

    return (
        <>
        <div className="services">
            <h2> Why choose Easybank?</h2>
            <p id="discription">We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.</p>

                <div className="cards">
        {card}
        </div>
        </div>
        
        </>
    )
}