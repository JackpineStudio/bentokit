$(document).ready(function(){ 

	$('#clickme').click(function() {
	  $('#book').slideUp('slow', function() {
	    // Animation complete.
	  });
	});
	
	$('#rating').click(function(eventObject) {
		eventObject.preventDefault();
		var s = $("meta[name=locale]").attr("content");
	    var appName = $("#appName").attr("value");
	    var s = $("#frameSrc").attr("value");
	    var liked = new Array();
	    for (var i = 0; i < cookies.length; i++) {
			var curCookie = cookies[i].trim();
			liked.push(curCookie);
	    }
	    liked.push(appName);
	    var value = liked.join(',');
	    document.cookie = value;
	    $.ajax({
			type: 'POST' ,// added,
			url:"/updateRating" ,
			dataType: 'json',
			data: {objectData: s} ,
			success: function (data) {
				var ret = jQuery.parseJSON(data);
			},
			error: function (xhr, status, error) {
				console.log('Error: ' + error.message);
			}
		});
	    var rating = $("#appRating").attr("value");
	    rating = parseInt(rating) + 1;
	    var str = "Likes " + rating;
	    $(".likes").html(str);
		$('#rating').fadeOut('slow',function(){
			//Animation 
		});
		return false;
	});
	
	window.onresize = function() {
		console.log("Resize");
		resizeFrame();
	};
	
	function resizeFrame() {
		var mainFrame = document.getElementById("mainFrame");
		mainFrame.style.height = document.body.scrollHeight + 'px';
		mainFrame.style.width = window.innerWidth + 'px';
}
});
