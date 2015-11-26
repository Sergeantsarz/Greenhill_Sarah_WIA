/*
     Name: Sarah R. Greenhill
     Date: 11/25/15
     Class & Section:  WIA-0001
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/



//Load different scripts based tests.
window.onload = function(){
if(Modernizr.canvas){
	//Canvas is supported
	
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	//Draw some text on our canvas
	ctx.font = "14pt Helvetica";
	ctx.fillText("Canvas is supported in this browser!", 20, 60);
	
	
	}else {
		//Canvas is not supported
		//Polyfill would go here
		ctx.fillText("Canvas is not supported in this browser!", 20, 60);
		
		}

console.log(Modernizr);

Modernizr.load({
	test: Modernizr,
	yep: "js/success.js",
	nope: "js/fail.js",
	complete: function(){
		//This will run after the js file is loaded based on the case
		
		console.log("Testing functionality complete!");
		}
	});

var square = document.getElementById("Canvas2");
var circle = document.getElementById("Canvas3");
var star = document.getElementById("Canvas4");
var umbrella = document.getElementById("Canvas5");
var text = document.getElementById("Canvas6");
var pixel = document.getElementById("Canvas7");
var scene = document.getElementById("Canvas8");
/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
if(square){

		var ctx = square.getContext("2d");
	if(ctx){
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.fillStyle = "#8080ff";
							
//Draw the rectangle
//strokeRect(posX, posY, Width, Height)
ctx.strokeRect(0, 0, 50, 100);
ctx.fillRect(0, 0, 50, 100);
	}
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


if(circle){

		var ctx = circle.getContext("2d");
	if(ctx){
			
			ctx.strokeStyle= "#000000";
			ctx.fillStyle = "red";
			ctx.lineWidth = 2;
			ctx.globalAlpha = .5;
			
			var degrees = 360;
			var radians = (degrees/180) * Math.PI;
						
			ctx.beginPath();
			//arc(x,y, r, sA, eA, Clockwise or counter);
			ctx.arc(50, 50, 20, 0, radians);
			ctx.fill();
			ctx.stroke();
	}
}




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

if(star){

		var ctx = star.getContext("2d");
	if(ctx){

			ctx.strokeStyle = "#a3297a";
			ctx.fillStyle= "#e599cc";
			ctx.lineWidth = 2;
						
			ctx.beginPath();
			ctx.moveTo(100, 0.0);
			ctx.lineTo(130, 67.5);
			ctx.lineTo(215.7, 78.3);
			ctx.lineTo(150, 120);
			ctx.lineTo(160, 205.1);
			ctx.lineTo(100, 150);
			ctx.lineTo(41.2, 205.1);
			ctx.lineTo(53.9, 120);
			ctx.lineTo(0.0, 78.3);
			ctx.lineTo(74.5, 67.5);
			ctx.lineTo(100, 0.0);
			
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
	}
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
if(umbrella){

		var ctx = umbrella.getContext("2d");
	if(ctx){
	
		var degrees = 180;
		var radians = (degrees/180)* Math.PI;
		
					
		ctx.beginPath();
		ctx.arc(100, 55, 50, 0, radians, true);
		
		ctx.fill();
		ctx.stroke();
		
	}
}

if(umbrella){

		var ctx = umbrella.getContext("2d");
	if(ctx){
	
		var degrees = 180;
		var radians = (degrees/180)* Math.PI;
		
					
		ctx.beginPath();
		ctx.arc(60, 55, 10, 0, radians);
		
		ctx.fill();
		ctx.stroke();
		
	}
}

if(umbrella){

		var ctx = umbrella.getContext("2d");
	if(ctx){
	
		var degrees = 180;
		var radians = (degrees/180)* Math.PI;
		
					
		ctx.beginPath();
		ctx.arc(80, 55, 10, 0, radians);
		
		ctx.fill();
		ctx.stroke();
		
	}
}

if(umbrella){

		var ctx = umbrella.getContext("2d");
	if(ctx){
	
		var degrees = 180;
		var radians = (degrees/180)* Math.PI;
		
					
		ctx.beginPath();
		ctx.arc(100, 55, 10, 0, radians);
		
		ctx.fill();
		ctx.stroke();
		
	}
}

if(umbrella){

		var ctx = umbrella.getContext("2d");
	if(ctx){
	
		var degrees = 180;
		var radians = (degrees/180)* Math.PI;
		
					
		ctx.beginPath();
		ctx.arc(120, 55, 10, 0, radians);
		
		ctx.fill();
		ctx.stroke();
		
	}
}

if(umbrella){

		var ctx = umbrella.getContext("2d");
	if(ctx){
	
		var degrees = 180;
		var radians = (degrees/180)* Math.PI;
		
					
		ctx.beginPath();
		ctx.arc(140, 55, 10, 0, radians);
		
		ctx.fill();
		ctx.stroke();
		
	}
}
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

if(text){

		var ctx = text.getContext("2d");
	if(ctx){
	
	ctx.font = "12pt Arial";
	ctx.fillText("Do or do not, there is no try.", 10, 80);	
		
	}
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

};
