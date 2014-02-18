
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
		}
	}
	var loginDiv = document.getElementById("loginForm");
	var logoutDiv = document.getElementById("logoutForm");
	var userLabel = document.getElementById("usernameLabel");
	var editDiv = document.getElementById("editDiv");
	var applyDiv = document.getElementById("apply");
	if(loggedIn == "true") {
		loginDiv.style.display = "none";	
		logoutDiv.style.display = "block";	
		userLabel.innerHTML = userDetails['username'];
		if(userDetails['userType'] == 'moderator') {
			editDiv.style.display = "block";
			if(applyDiv != null)
				applyDiv.style.display = "none";
		}
		else {
   			editDiv.style.display = "none";
   			if(!(userDetails['userType'] == 'inProcess')) {
   				applyDiv.style.display = "block";
   			}
   			
		}
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
	}
	var moderator = userDetails['userType'] == 'moderator';
	document.getElementById('usernameLabel').innerHTML = "Welcome back " + userDetails['username'] + " !";
	var intervalFn = setInterval(function(){
		if(moderator) 
			window.location.replace("/edit");
		else 
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
	return userDetails;
}

function logout() {
	document.cookie = "loggedIn=false";
}

function loggedIn() {
	var userDetails = getUserDetails();
	console.log("logged in ", userDetails['loggedIn']);
	if(userDetails['loggedIn'].indexOf('false') != -1)
		return false;
	else 
		return true;
}

function checkLoggedIn() {
	if(!loggedIn()) {
		window.location.replace("/restricted");
	}
}

function checkUserType() {
	var userDetails = getUserDetails();
	if(userDetails['userType'] != 'moderator') {
		window.location.replace("/restricted");
	}
}

function checkLiked(appName){
	var cookies = document.cookie.split(";");
	var liked = false;
	for (var i = 0; i < cookies.length; i++) {
		var curCookie = cookies[i].split(',');
		for (var j = 0; j < curCookie.length; j++) {
			if(curCookie[j] == appName) {
			liked = true;
			break;
			}
		}
	}
	return liked;
}

function like(appName) {
	var cookies = document.cookie.split(";");
	var tempValue = "";
	for (var i = 0; i < cookies.length; i++) {
		var name = cookies[i].split("=")[0];
		var value = cookies[i].split("=")[1];
		if(name.indexOf("liked") != -1) {
			tempValue += value;
		}
	}
	tempValue += "," + appName;
  	document.cookie = "liked=" + tempValue + ";";
}

function resizeFrame() {
	var mainFrame = document.getElementById("mainFrame");
	mainFrame.style.height = document.body.scrollHeight + 'px';
	mainFrame.style.width = window.innerWidth + 'px';
}
