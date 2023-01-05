import React from 'react'


export default function App (){

    const [num, update] = React.useState(0);
    function add() {
        update(num + 1)
    }
    function sub() {
        if (num != 0) {
            update(num - 1)
        }
        
    }
    function reset() {
        update(0)
    }
    return (
        <>

        <div class="header">
			<h2>COUNTER</h2>
			<p>A simple React counter</p>
		</div>
		
			
	    
		
		<h1  id="display">{num}</h1>
		<div class="buttons">
			<div id="sub" onClick={sub}>Decrement</div>
			<div id="add" onClick={add}>Increment</div>
		</div>
        {num != 0 && <button id='reset' onClick={reset}> Reset </button>}
        
        </>
    )
}