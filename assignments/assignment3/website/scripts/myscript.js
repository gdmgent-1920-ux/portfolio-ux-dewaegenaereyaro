$(document).ready(function(){
	

	$("#cat1").click(function(){
		$("#onsale2").fadeToggle(1000);
		$("#onsale").fadeOut(0);
		$("#onsale3").fadeOut(0);
		
	});
	
	$("#cat2").click(function(){
		$("#onsale").fadeToggle(1000);
		$("#onsale2").fadeOut(0);
		$("#onsale3").fadeOut(0);
	});
	
	$("#cat3").click(function(){
		$("#onsale3").fadeToggle(1000);
		$("#onsale").fadeOut(0);
		$("#onsale2").fadeOut(0);
	});

	


});