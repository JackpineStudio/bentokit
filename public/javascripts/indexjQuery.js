$(document).ready(function(){ 
	
	$('#logoutButton').click(function(eventObject) {
		eventObject.preventDefault();
		$('#loginForm').show();
		$('#logoutForm').hide();
		$('#editDiv').hide();
		logout();
	});

	$('.app').hover(function(eventObject) {
		eventObject.preventDefault();
		var id = $(this).attr("id")
		$likeicon = $(".likeicon, ." + id);
		$likeicon.show();
	});

	$(".like-icon").click(function(eventObject) {
		eventObject.preventDefault();
		var appName = $(this).attr("id");
		var classNames = $(this).attr("class").split(" ");
		var id = classNames[classNames.length -1 ];
		var s = appName;
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
		
		$likeLabel = $(".like-label." + id);
		var numOfLikes = parseInt($likeLabel.html()) + 1;
	    $likeLabel.html(numOfLikes);
	    $(this).fadeOut('slow',function(){
			//Animation 
		});
		return false;
	});

	function logout() {
		document.cookie = "loggedIn=false";
		document.cookie = "userType=none";
		document.cookie = "username=none";
	}
});

