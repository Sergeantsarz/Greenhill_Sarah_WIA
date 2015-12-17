$(document).ready(function(){

console.log('JavaScript is linked.');

window.onload = function(){

		//Modernizr

		if(Modernizr.canvas){
			//Canvas is supported
			
			var theCanvas = document.getElementById("supported1");
			var ctx = theCanvas.getContext("2d");
			
			//Let User Know if Canvas Works
			ctx.font = "8pt Helvetica";
			ctx.textAlign="start";
			ctx.fillText("Canvas is supported in this browser!", 150, 92);
			
		
			}else {
				//Canvas is not supported
				//Polyfill would go here
				ctx.font = "8pt Helvetica";
				ctx.textAlign="start";
				ctx.fillText("Canvas is not supported in this browser!", 150, 92);
				
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
		var content2 = document.getElementById("content2");
	
		if(content){
	
			var ctx = content.getContext("2d");
			if(ctx){
		
				ctx.font = "20pt Love Ya Like A Sister";
				ctx.fillStyle = '#ffffff';
				ctx.textAlign="center";
				ctx.fillText("About The Zombie Outbreak", 710, 80);	
			}
		}
		
		if(content2){
	
			var ctx = content.getContext("2d");
			if(ctx){
		
				ctx.font = "20pt Love Ya Like A Sister";
				ctx.fillStyle = '#ffffff';
				ctx.textAlign="center";
				ctx.fillText("Affected Areas: World View", 710, 550);	
			}
		}
	
	
	//Audio
	
		var sound = document.getElementById("siteSound");
		sound.volume = 0.5;

	}
//Interactive Map

// When the form changes
	$('#mapForm').change(function() {
	
		var selectedContinent = $('#mapForm option:selected').val();
		if (selectedContinent == 'ALL'){
			$('a.dot').slideDown(1000);
		}else{
			$('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
			$('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var city = '.city_detail#' + $(this).attr('city');
		var htmlCode = $(city).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .city_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});


});