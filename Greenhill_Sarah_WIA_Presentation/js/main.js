//Sarah R. Greenhill
//WIA - December 2015 - Presentation

$(document).ready(function(){
	//Sets the YouTube video as the background
  $('#wrapper').tubular({videoId: '6tmbeLTHC_0'});
  
  //Animate the quote alert 
  $(".alert button.close").click(function (e) {
    $(this).parent().fadeOut('slow');
});
  
  //Video Reference
  console.log('The video on this site is credited to NASA at the following link source: https://www.youtube.com/watch?v=6tmbeLTHC_0');
  
});