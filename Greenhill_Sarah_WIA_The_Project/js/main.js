console.log('JavaScript is linked.');

//Modernizr

window.onload = function(){

	if(Modernizr.canvas){
		//Canvas is supported
		
		var theCanvas = document.getElementById("supported1");
		var ctx = theCanvas.getContext("2d");
		
		//Let User Know if Canvas Works
		ctx.font = "8pt Helvetica";
		ctx.fillText("Canvas is supported in this browser!", -50, 42);
		
	
		}else {
			//Canvas is not supported
			//Polyfill would go here
			ctx.fillText("Canvas is not supported in this browser!", -50, 42);
			
			}

	console.log(Modernizr);

//Modernizr Tests

	Modernizr.load({
		test: Modernizr,
		yep: "js/success.js",
		nope: "js/fail.js",
		complete: function(){
			//Runs after JS file loads
			console.log("Testing functionality complete!");
		}
	});

	Modernizr.load({
		test: Modernizr.canvas,
		yep: "js/success.js",
		nope: "js/flashcanvas.js",
	
	});	

//Canvas 

	var content = document.getElementById("content1");

	if(content){

		var ctx = content.getContext("2d");
		if(ctx){
	
			ctx.font = "12pt Love Ya Like A Sister";
			ctx.fillText("About Zombies", 10, 80);	
		}
	}

//Audio

var sound = document.getElementById("siteSound");
sound.volume = 0.5;
};