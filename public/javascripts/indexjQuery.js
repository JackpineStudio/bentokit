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

	$("#menuButton").click(function(eventObject) {
		eventObject.preventDefault();
		$menuButton = $(this);
		$sideBar = $(".sidebar");
		if ($menuButton.hasClass("shown")) {
			$menuButton.removeClass("shown");
			$menuButton.html("[Show Menu]");
			$sideBar.hide(function () {
				$(this).slideUp("fast", function(){
					$('html,body').animate({scrollTop: $menuButton.offset().top}, 'fast');
				});
			});

		} else {
			$menuButton.addClass("shown");
			$menuButton.html("[Hide Menu]");
			$sideBar.show(function () {
				$(this).slideDown("fast", function(){
				// Animation complete
				});
			});
		}
	});

	function logout() {
		var loc = window.location + "";
		document.cookie = "loggedIn=false";
		document.cookie = "userType=none";
		document.cookie = "username=none";
		if(loc.indexOf("edit") != -1)
			window.location.replace("/");
		
	}
});

