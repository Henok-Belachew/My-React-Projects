const sub = document.getElementById("sub");
const add = document.getElementById("add");
const display = document.getElementById("display");
var num = 0;


function Add()



{
	num++;
	display.innerHTML = num;
	if (num >= 0)
	{
		display.style.color = "rgb(57, 57, 109)";
	}
}

function Sub()
{
	
	num--;
	display.innerHTML = num;
	if (num < 0)
	{
		// display.style.color = 'Red'	
	}
	console.log("working");
}

sub.addEventListener('click', Sub);
add.addEventListener('click', Add)
