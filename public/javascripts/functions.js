
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
	//if(userType == 'moderator')
	editDiv.style.display = "block";		
	} else {
		loginDiv.style.display = "block";	
		logoutDiv.style.display = "none";	
		userLabel.innerHTML = "";
		editDiv.style.display = "none";
	}
}