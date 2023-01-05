import React, {useState} from "react";
import Todo from "./Todo";
import Display from "./Dispaly";
import './style.css'

export default function App () {

    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")

    function getInput (event) {
        setInput(event.target.value)
    }

    function addTodo () {
        setTodo([...todo, input])
        setI([...i,i+1])
    }

    const [i, setI] = useState([1])

    const todoList = todo.map((item)=>{
        
        
            return <Todo num={i} do={item}/>
        
      
        
        
        
    }
    
    )
    
    return (
         <div className="container">
            <h2>My To Do App</h2>
            <div className="form">

            <input onChange={getInput} type="text" /> 
            <button onClick={addTodo}> Add </button>

            </div>
            
            

            <section>
            {todoList}

            </section>
            
         </div> )
}

