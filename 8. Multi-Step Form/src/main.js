import React from "react";
import AllSteps from "./components/sidenav/allsteps";
import "./main.css"
import Panel_1 from "./components/planes/panel_1";
import Panel_2 from "./components/planes/panel_2";
import Panel_3 from "./components/planes/panel_3";
import Panel_4 from "./components/planes/panel_4";
import ThankYou from "./components/planes/ThankYou";

import { useState } from "react";


export default function Main () {
    
    const [PanelNum, setPanelNum] = useState(1);
    
    return (

        

        <div className="main">
                <AllSteps PanelNum={PanelNum} />
                
                {PanelNum == 1 && <Panel_1 PanelNum={PanelNum} UpdatePanel={setPanelNum}/>}
                {PanelNum == 2 && <Panel_2 PanelNum={PanelNum} UpdatePanel={setPanelNum}/>}
                {PanelNum == 3 && <Panel_3 PanelNum={PanelNum} UpdatePanel={setPanelNum}/>}
                {PanelNum == 4 && <Panel_4 PanelNum={PanelNum} UpdatePanel={setPanelNum}/>}
                {PanelNum == 5 && <ThankYou/>}
                
        </div>
        
    )
}