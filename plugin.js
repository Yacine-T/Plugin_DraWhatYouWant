	window.addEventListener("load", function(){

		var clear = document.getElementById("clear");
		var paint = false;
		var color = "black";
		var bbutton = document.getElementById("blue");
		var rbutton = document.getElementById("red");
		var gbutton = document.getElementById("green");
		var blbutton = document.getElementById("black")

		can = document.querySelector("canvas");
		context = can.getContext("2d");
		can.addEventListener("mouseup", finish);
		can.addEventListener("mousemove", draw);
		clear.addEventListener("click", clearContent);
		can.addEventListener("mousedown", painting);
		bbutton.addEventListener("click", blue);
		rbutton.addEventListener("click", red);
		gbutton.addEventListener("click", green);
		blbutton.addEventListener("click", black);
		canvas.height = 300;
		canvas.width = 300;

			function clearContent(){	
			context.clearRect(0, 0, can.width, can.height);
		}

		function painting(){
			paint = true;
			context.beginPath();
		}

		function finish(){
			paint = false;
		}

		function draw(e){
			if (!paint) return 0;
	var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
				context.strokeStyle=color;
				context.lineWidth = 5;
				context.lineCap = "round";
				context.lineTo(x, y);
				context.stroke();
		}

	function blue() {
		color = "blue";
	}

	function red() {
		color = "red";
	}

	function green() {
		color = "green";
	}

	function black(){
		color = "black";
	}


	});