$(document).ready(function(){ 
	
	$('#logoutButton').click(function(eventObject) {
		eventObject.preventDefault();
		$('#loginForm').show();
		$('#logoutForm').hide();
		$('#editDiv').hide();
		logout();
		return;
		var cookies = document.cookie.split(";");
		var liked = new Array();
	    for (var i = 0; i < cookies.length; i++) {
			var curCookie = cookies[i].split(',');
			for (var j = 0; j < curCookie.length; j++) {
				if(curCookie[j].indexOf('loggedIn') != -1) {
					liked.push('loggedIn:false');
				} else if(curCookie[j].indexOf('username') != -1 ) {
					liked.push(curCookie[j]);
					$('#username').attr('value',curCookie[j].split(':')[1]);	
				} else {
					//liked.push(curCookie);
				}
			}     
	    }
	    window.location.href = "/";
	    var value = liked.join(',');
	    document.cookie = value;
		return false;
	});

	function logout() {
		document.cookie = "loggedIn=false";
		document.cookie = "userType=none";
		document.cookie = "username=none";
	}
});

