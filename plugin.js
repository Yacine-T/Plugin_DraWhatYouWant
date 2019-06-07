window.addEventListener("load", function(){


var can = document.getElementById('canavs');
context = can.getContext("2d");


function move(){

	x = event.pageX;
	y = event.pageY;
}

function clear(){
			
		context.clearRect(0, 0, can.width, can.height);
			
			}
			
				});