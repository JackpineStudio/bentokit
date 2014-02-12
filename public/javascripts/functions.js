
function putCategories(categoriesArray) {
	var colors = new Array();
	var categories = categoriesArray;
	var list = document.getElementById("filter");
	for (var i = 0; i < categories.length; i++) {
		var curCategory = categories[i]
		var listElement = document.createElement("LI");
		var anchor = document.createElement("a");
		anchor.setAttribute("href", "#");
		anchor.setAttribute("class", "filter " + curCategory.name + "-style");
		anchor.innerHTML = curCategory.name.toUpperCase();
		var letters = '0123456789ABCDEF'.split('');
		var randomColor = '#';
		var style = "background-color: " + curCategory.color + ";";
		colors[curCategory.name] = curCategory.color;
		anchor.setAttribute("style", style);
		listElement.appendChild(anchor);
		list.appendChild(listElement);
	}
	return colors;
}
//Check cookies for login information
function loginManager() {
	var cookies = document.cookie.split(";");
	var loggedIn = false;
	var userName = "";
	var userDetails = {};
	for(var i = 0; i < cookies.length; i++) {
		var curCookie = cookies[i].split('=');
		var name = curCookie[0], value = curCookie[1];
		if(name == ' loggedIn' || name == 'loggedIn') {
			loggedIn = value;
			userDetails = getUserDetails();
			console.log("UserDetails", userDetails);
			console.log("loggedIn:", loggedIn);
		}
	}
	var loginDiv = document.getElementById("loginForm");
	var logoutDiv = document.getElementById("logoutForm");
	var userLabel = document.getElementById("usernameLabel");
	var editDiv = document.getElementById("editDiv");	
	if(loggedIn == "true") {
		loginDiv.style.display = "none";	
		logoutDiv.style.display = "block";	
		userLabel.innerHTML = userDetails['username'];
		console.log("Type", userDetails);
		if(userDetails['userType'] == 'moderator') {
			editDiv.style.display = "block";
			console.log("moderator");
		}
		else 
   			editDiv.style.display = "none";
	} else {
		loginDiv.style.display = "block";	
		logoutDiv.style.display = "none";	
		userLabel.innerHTML = "";
		editDiv.style.display = "none";
	}
}

function loginSuccess(userDetails) {
	var cookies = document.cookie;
	var cookieArray = cookies.split(';');
	var tempValue = new Array();
	for (var i = 0; i < cookieArray.length; i++) {
		var name = cookieArray[i].split("=")[0];
		var value = cookieArray[i].split("=")[1];
		var curCookie = "" + name + "=" + value + ";";
	}

	var value = "";

	if(userDetails['loggedIn'] == true) {
		console.log("Logged in");
		var curCookie = "loggedIn=" + userDetails['loggedIn'] + ";";
		document.cookie = curCookie;
		curCookie = "username=" + userDetails['username'] + ";";
		document.cookie = curCookie;
		curCookie = "userType=" + userDetails['userType'] + ";";
		document.cookie = curCookie;
	}
	cookies = document.cookie;
	cookieArray = cookies.split(';');
	for (var i = 0; i < cookieArray.length; i++) {
		var curCookie = cookieArray[i].split('=');
		console.log("name", curCookie[0], "value", curCookie[1]);
	}

	document.getElementById('usernameLabel').innerHTML = "Welcome back " + userDetails['username'] + " !";
	var intervalFn = setInterval(function(){
		window.location.replace("/");
		clearInterval(intervalFn);
	}, 1200);
}

function getUserDetails() {
	var userDetails = {};
	var cookies = document.cookie.split(";");
	for(var i = 0; i < cookies.length; i++) {
		var curCookie = cookies[i].split('=');
		var name = curCookie[0], value = curCookie[1];
		if(name[0] == " ")
			name = name.substring(1);
		userDetails[name] = value;
	}
	console.log('userDetails', userDetails);
	return userDetails;
}

function logout() {
	document.cookie = "loggedIn=false";
}

function checkUserType() {
	var userDetails = getUserDetails();
	if(userDetails['userType'] != 'moderator') {
		window.location.replace("/restricted");
	}
}