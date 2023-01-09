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

    // State for storing usering input data
    const [userData, setUserData] = useState(
        {
            step_1: {
                Name: "e.g. Henok Belachew",
                Email: "e.g. example@gmail.com",
                Phone_Number: "e.g. +251 9546 23",
            },
            step_2: {
                Monthly: true,
                Plan: 1,
                Price: 0,
            },
            step_3: {
                add_on_1: "",
                add_on_2: "",
                add_on_3: ""
            }

        }
    )
    


        // functions that updates the step - 1 input data
        function updateStep_1 (newData) {

            setUserData(oldData => {
                return {...oldData,
                    step_1: {
                        Name: newData[0],
                        Email: newData[1],
                        Phone_Number: newData[2]
                    }}
            })
                    
        }

         // functions that updates the step - 2 user choice
         function updateStep_2 (newData) {

            setUserData(oldData => {
                return {...oldData,
                    step_2: {
                        Monthly: newData[0],
                        Plan: newData[1],
                        Price: newData[2]
                    }}
            })
                    
        }



    function changePlan() {
     }
    return (

        

        <div className="main">
                <AllSteps PanelNum={PanelNum} />
                
                {PanelNum == 1 && <Panel_1 PanelNum={PanelNum} UpdatePanel={setPanelNum}
                
                // Passing User Input values

                name={userData.step_1.Name}
                email={userData.step_1.Email}
                Phone_Number = {userData.step_1.Phone_Number}

                // Passing function that updates the state
                updateStep_1 = {updateStep_1}

            
            
            
                
                
                
                
                />}
                {PanelNum == 2 && <Panel_2 
                PanelNum={PanelNum} 
                UpdatePanel={setPanelNum} 
                step_2={userData.step_2} 
                setUserData={setUserData}
                planSelected = {userData.step_2.Plan}
                
                />}
                {PanelNum == 3 && <Panel_3 PanelNum={PanelNum} UpdatePanel={setPanelNum}/>}
                {PanelNum == 4 && <Panel_4 PanelNum={PanelNum} UpdatePanel={setPanelNum}/>}
                {PanelNum == 5 && <ThankYou/>}
                
        </div>
        
    )
}