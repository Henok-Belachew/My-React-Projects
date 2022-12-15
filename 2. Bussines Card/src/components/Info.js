import React from 'react'
import avator from './img.png'


export default function Info(props) {
    return (
        <>
        <img id='ava' src={avator} alt="" />
        <div className='texts'>
            <h2>{props.name}</h2>
            <h3>{props.title}</h3>
            <p>henokbelachew.com</p>
        </div>
        <div className="buttons">
            <button className="btn ema"> <span className='inn1'> <a href="https://henokbelachewstu@gmail.com"> <i class="fa-regular fa-envelope"></i> Email </a></span>
            </button>
           
            <button className="btn twt"> <span className='inn2'> <a href="https://www.linkedin.com/in/henok-belachew"><i class="fa-brands fa-linkedin"></i> Linkedin </a> </span>
            </button>
        </div>
        </>
    );
}