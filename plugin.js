window.addEventListener("load", function(){

	var clear = document.getElementById("clear");
	var paint = false;
	
	can = document.querySelector("canvas");
	context = can.getContext("2d");
	can.addEventListener("mousedown", painting);
	can.addEventListener("mouseup", finish);
	can.addEventListener("click", draw);
	clear.addEventListener("click", clearContent);


	function painting(){
		paint = true;
	}

	function finish(){
		paint = false;
	}

	function draw(e){
		if (!paint) return;
			context.strokeStyle="black";
			context.lineWidth = 5;
			context.lineCap = "round";
			context.beginPath();
			context.lineTo(e.clientX, e.clientY);
			context.stroke();
			context.closePath();
	}



	function clearContent(){	
		context.clearRect(0, 0, can.width, can.height);
	}

});