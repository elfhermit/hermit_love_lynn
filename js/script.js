
$(document).ready(function(){
	
	/* ---- Countdown timer ---- */
	$('#counter').countdown({
		timestamp : (new Date(2025,6,20,12,0,0)).getTime() + 8*10*60*60*1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});
