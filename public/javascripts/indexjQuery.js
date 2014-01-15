$('#loginButton').click(function(eventObject) {
	eventObject.preventDefault();
	var s = {};
	s['username'] = $('#username').attr('value');
	s['password'] = $('#password').attr('value');
	console.log('jquery', s);
	$.ajax({
		type: 'POST' ,// added,
		url:"/login",
		dataType: 'json',
		data: {username : s['username'], password : s['password']},
		complete : function(data) {
			$('#loginForm').hide();
			$('#logoutForm').show();
			var user = "username:" + $('#username').attr('value');
			var logged = "loggedIn:true";
			var cookies = document.cookie.split(";")
			var liked = new Array();
			var contains = false;
		    for (var i = 0; i < cookies.length; i++) {
				var curCookie = cookies[i].split(',');
				for (var j = 0; j < curCookie.length; j++) {
					if(curCookie[j].indexOf('loggedIn') != -1) {
						liked.push(logged);
						contains = true;
					} else if(curCookie[j].indexOf('username') != -1 ) {
						liked.push(user);
						contains = true;
					} else  {
						//liked.push(curCookie);
					}
				}
		    }
		    if(!contains) {
			    liked.push(user);
			    liked.push(logged);
		    }
		    var value = liked.join(',');
		    document.cookie = value;
		    $('#usernameLabel').attr('innerHTML', $('#username').attr('value'));
		    $('#username').attr('value','');
		    $('#password').attr('value', '');
		     
		},
		error: function(xhr, status, error) {
			console.log("Error:", error);
			
		}
	});
	return false;
});

$('#logoutButton').click(function(eventObject) {
	eventObject.preventDefault();
	$('#loginForm').show();
	$('#logoutForm').hide();
	
	var cookies = document.cookie.split(";")
	var liked = new Array();
    for (var i = 0; i < cookies.length; i++) {
		var curCookie = cookies[i].split(',');
		for (var j = 0; j < curCookie.length; j++) {
			if(curCookie[j].indexOf('loggedIn') != -1) {
				console.log('pushing');
				liked.push('loggedIn:false');
			} else if(curCookie[j].indexOf('username') != -1 ) {
				liked.push(curCookie[j]);
				$('#username').attr('value',curCookie[j].split(':')[1]);
			} else {
				//liked.push(curCookie);
			}
		}
    }
    var value = liked.join(',');
    document.cookie = value;
	return false;
});