import React from "react";
import AllSteps from "./components/sidenav/allsteps";
import "./main.css"
import Panel_1 from "./components/planes/panel_1";
import Panel_2 from "./components/planes/panel_2";
import Panel_3 from "./components/planes/panel_3";
import Panel_4 from "./components/planes/panel_4";
import ThankYou from "./components/planes/ThankYou";

import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";


export default function Main () {
    
    const [PanelNum, setPanelNum] = useState(1);
   
    // Add-ons state
    const [addOns, setaddOns] = useState([
        {
            id: 1,
            status: true,
            // cheker: addOns[0].status ? "checked" : ""
        },
        {
            id: 2,
            status: true,
        },
        {
            id: 3,
            status: false,
        }]
    )
    // Different states for each add-ons 
    const [onlineService, setOnline] = useState(false)
    const [largeStorage, setLarge] = useState(false)
    const [customProfile, setCustom] = useState(false)

    // 

      // State for the add-ons section

      
      const [step_3, setStep3States] = useState ( [
        
            {
                id: 0,
                selected: false,
                feature: "Online Service",
                discription: "Acces to multiplayer games",
                monPrice: 1,
                yrPrice: 10
        
            },
            {
                id: 1,
                selected: false,
                feature: "Larger Storage",
                discription: "Extra 1TB cloud save",
                monPrice: 2,
                yrPrice: 20
        
            },
            {
                id: 2,
                selected: false,
                feature: "Custimizable Profile",
                discription: "Custom theme on your profile",
                monPrice: 2,
                yrPrice: 20
        
            }
        ]
        
    )
    // function that updates the status of add-ons

    function updateAddOns (newStatus, id) {
        setStep3States(oldData => {
            return {...oldData,
                step_3: {...oldData,
                    
                    
                } }
        })
    } 

    console.log(step_3[0])
    console.log("voerhere")

    // State for storing usering input data
    const [userData, setUserData] = useState(
        {
            step_1: {
                Name: "e.g. Henok Belachew",
                Email: "e.g. example@gmail.com",
                Phone_Number: "e.g. +251 9546 23",
            },
            step_2: {
                Yearly: false,
                Plan: 1,
                Price: 0,
            },
            step_3: [
                {
                    selected: false,
                    feature: "Online Service",
                    discription: "Acces to multiplayer games",
                    monPrice: 1,
                    yrPrice: 10
            
                }
            ]
            

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

        //  function that updates the selected plan when clicked
         function updatePlan (newPlan, type) {

            setUserData(oldData => {
                return {...oldData,
                    step_2: {
                        ...oldData.step_1,
                        Yearly: type,
                        Plan: newPlan
                    }}
            })  
        }

        // function that changes the type of plan yearly or monthly
        function updateType (newType, plan) {
            setUserData(oldData => {
                return {...oldData,
                    step_2: {
                        ...oldData.step_1,
                        Yearly: newType,
                        Plan: plan
                    }}
            })
        }


        // function that updates the status of add-ons
           


 
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
               
              
                PlanType = {userData.step_2.Yearly}
                updateType = {updateType}
                planSelected = {userData.step_2.Plan}
                // Passing function that updates the selected plan
                updatePlan = {updatePlan}
                
                />}

                {PanelNum == 3 && <Panel_3 PanelNum={PanelNum} UpdatePanel={setPanelNum}
                
                Data = {step_3}
                selectedAdd = {userData.step_3}

                // passing the state of each add-ons
                onlineService = {onlineService}
                largeStorage= {largeStorage}
                customProfile = {customProfile}

                // passing state methods of each add-ons state

                setOnline ={setOnline}
                setLarge = {setLarge}
                setCustom = {setCustom}

                // passing the state of each add-ons together
                addOns = {addOns}

                />}
                {PanelNum == 4 && <Panel_4 PanelNum={PanelNum} UpdatePanel={setPanelNum}/>}
                {PanelNum == 5 && <ThankYou/>}
                
        </div>
        
    )
}