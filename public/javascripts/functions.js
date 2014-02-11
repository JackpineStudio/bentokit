
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

function loginManager(userDetails) {
	
	//var userDetails = {};
	console.log("Details", userDetails);
	
	var cookies = document.cookie.split(";");
	var loggedIn = false;
	var userName = "";
	for(var i = 0; i < cookies.length; i++) {
		var curCookie = cookies[i].split(',');
		for (var j = 0; j < curCookie.length; j++) {
			console.log('curCookie', curCookie[j]);
			if(curCookie[j].indexOf('loggedIn') != -1) {
			console.log("Logged in", curCookie[j]);
			if(curCookie[j].indexOf('true') != -1)
				loggedIn = true;
			}
			if(curCookie[j].indexOf('username') != -1 ) {
				userName = curCookie[j].split(':')[1];
			}
		}
	}
	var loginDiv = document.getElementById("loginForm");
	var logoutDiv = document.getElementById("logoutForm");
	var userLabel = document.getElementById("usernameLabel");
	var editDiv = document.getElementById("editDiv");	
	if(loggedIn) {
		loginDiv.style.display = "none";	
		logoutDiv.style.display = "block";	
		userLabel.innerHTML = userName;
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
		var curCookie = "" + name + "=" + value + "";
		tempValue.push(curCookie);
		console.log("name", name, "value", value);
	}

	if(userDetails['loggedIn']) {
		console.log("Logged in");
		var curCookie = "loggedIn=" + userDetails['loggedIn'] + "";
		tempValue.push(curCookie);
		curCookie = "username=" + userDetails['username'] + "";
		tempValue.push(curCookie);
		curCookie = "userType=" + userDetails['userType'] + "";
		tempValue.push(curCookie);  
	}
	var value = tempValue.join(';');
	console.log("Login sucess", value);
	document.cookie = value;
	document.getElementById('usernameLabel').innerHTML = "Welcome back " + userDetails['username'] + " !";
}