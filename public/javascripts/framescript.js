$(document).ready(function(){ 

	$('#clickme').click(function() {
	  $('#book').slideUp('slow', function() {
	    // Animation complete.
	  });
	});
	
	window.onresize = function() {
		resizeFrame();
	};
	
	function resizeFrame() {
		var mainFrame = document.getElementById("mainFrame");
		mainFrame.style.height = document.body.scrollHeight + 'px';
		mainFrame.style.width = window.innerWidth + 'px';
	}
});
