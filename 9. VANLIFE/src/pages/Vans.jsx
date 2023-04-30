import React from 'react'




import van1 from "../images/van1.png"
import van2 from "../images/van2.png"
import van3 from "../images/van3.png"
import van4 from "../images/van4.png"
import van5 from "../images/van5.png"
import van6 from "../images/van6.png"
// import vans from "./images/vans.png"




export default function Vans () {
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

            <div className="all-vans">
                <div className="van">
                    <img className="van-img " src={van1} alt="" />
                    <div className="btm">
                        <h2>Modest Explorer</h2>
                        <h2>$60 <span>/day</span> </h2>
                    </div>
                    <span className="van-smp van-typ">Simple</span>
                    
                </div>
                <div className="van">
                    <img className="van-img " src={van2} alt="" />
                    <div className="btm">
                        <h2>Modest Explorer</h2>
                        <h2>$60 <span>/day</span> </h2>
                    </div>
                    <span className="van-rug van-typ">Rugged</span>
                    
                </div>

                <div className="van">
                    <img className="van-img " src={van3} alt="" />
                    <div className="btm">
                        <h2>Modest Explorer</h2>
                        <h2>$60 <span>/day</span> </h2>
                    </div>
                    <span className="van-lux van-typ">Luxury</span>
                    
                </div>
                <div className="van">
                    <img className="van-img" src={van4} alt="" />
                    <div className="btm">
                        <h2>Modest Explorer</h2>
                        <h2>$60 <span>/day</span> </h2>
                    </div>
                    <span className="van-smp van-typ">Simple</span>
                    
                </div>
                <div className="van">
                    <img className="van-img" src={van5} alt="" />
                    <div className="btm">
                        <h2>Modest Explorer</h2>
                        <h2>$60 <span>/day</span> </h2>
                    </div>
                    <span className="van-lux van-typ">Luxury</span>
                    
                </div>
                <div className="van">
                    <img className="van-img" src={van6} alt="" />
                    <div className="btm">
                        <h2>Modest Explorer</h2>
                        <h2>$60 <span>/day</span> </h2>
                    </div>
                    <span className="van-rug van-typ">Ruggged</span>
                    
                </div>
            </div>

       </div>
    ) 
}
