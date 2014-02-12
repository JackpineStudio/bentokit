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
	    like();
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

	function like() {
		var tempValue = "";
		for (var i = 0; i < cookies.length; i++) {
			var name = cookies[i].split("=")[0];
			var value = cookies[i].split("=")[1];
			if(name == " liked") {
				console.log("value", value);
				tempValue += value;
			}
		}
		tempValue += "," + appName;
	  	document.cookie = "liked=" + tempValue + ";";
	}
});
