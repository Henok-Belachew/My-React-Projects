import React from "react";
export default function Todo() {
    

    
    return (
        <div className="todo">
            <div className="rightitem">
                <input className="chk" type="checkbox" />
                <div className="details">
                    <span>Finish GDSC Project</span>
                    <span>Date: 4-6-2023</span>
                </div>
                
            </div>
            
            <div>
            <button className="rmvBtn"> <i class="fa-solid fa-trash"></i> Remove</button>
            
            </div>
            
        </div>
    )
}