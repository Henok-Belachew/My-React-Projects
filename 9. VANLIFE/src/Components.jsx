import React from "react";
import './index.css'
import './vans.css'
import about from "./images/about.png"
import vans from "./images/vans.png"
export function Home () {
    return (
       <div className="contianer hm">
            <div className="contents hm-content">
                <h1>
                    You got the travel plans, we got the travel vans.
                </h1>
                <p>
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                <button>
                    Find your van
                </button>
            </div>
            <div className="bg"></div>
            <img className="img1" src={about} alt="" />
       </div>
    ) 
}

export function About () {
    return (
        <div className="contianer">
            <img className="img2" src={vans} alt="" />
            <div className="contents van-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
                </p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className="buttomAd"> 
                    <h2>
                    Your destination is waiting. <br></br>
                    Your van is ready.
                    </h2>
                    <button>
                        Explore our vans
                    </button>

                </div>
            </div>

        </div>
    )
}


export function Vans () {
    return (
       <div className="contianer vans">
            <div className="heading">
                <h2>Explore our van options</h2>
                <div className="filters">
                    <button className="filter">Simple</button>
                    <button className="filter">Luxury</button>
                    <button className="filter">Rugged</button>
                    <button className="clear">Clear filters</button>
                </div>
                
                

            </div>
       </div>
    ) 
}
