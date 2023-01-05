import React, { useState } from "react";


export default function Todo(props) {
    

    
    return (
        <div className="todo">
            {props.num}. {props.do}
            <div>
            <button>Remove</button>
            <button>Completed</button>
            </div>
            
        </div>
    )
}