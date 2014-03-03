var db = require('../node_modules/Database_functions.js')
  , fs = require('fs');
/*
 * GET home page.
 */
exports.updateRating = function(req,res){
	console.log("Update Rating", req.body.objectData);
	var object = (req.body.objectData);
	db.updateRating(object);
};

exports.frame = function(req, res){
  var link = req.query.user.link;
  var object = -1;
  object = db.getApp(link);
  var value = -1, name = "";
  if(object != -1 ) {
	  value = object.getRating();
	  name = object.getName();
  }
  res.render('frame',{frameSrc: link, rating: value, curApp:name}); 
};

function home(req, res, items) {
	db.getAllApps(function(data) {
		data.sort(function(a,b) {
			if(a.rating == undefined)
				a.rating = 0;
			if(b.rating == undefined)
				b.rating = 0;
			return b.rating-a.rating;
		});
		db.getColors(function(colors) {
				res.render('index', {myObj: data, categories: colors});
		});
	});
}

exports.login = function(userDetails, callback) {
	login(userDetails, callback);
};

exports.home = function(req,res){
	home(req, res, null);
};

function login(userDetails, req, res) {
	console.log("index", "Trying login");
	db.login(userDetails, function(items) {
		console.log("Items", items);
		if(items['loggedIn']) {
			res.render('loginSuccess', {userDetails:items});
			home(req, res, userDetails);
		} else {
			home(req, res);
		}
		
	});
}

exports.loginSuccess = function(req, res) {
	res.render('loginSuccess');	
};


exports.loginFailure = function() {
	loginFailure();
};

function loginFailure() {
	console.log("Cannot login");
}

exports.loginHandler = function (req, res) {
	var userDetails = {};
	console.log("req",  req.body);
	userDetails['username'] = req.body.username;
	userDetails['password'] = req.body.password;
	console.log('username', userDetails['username'], 'password', userDetails['password'] );
	login(userDetails, req, res);
};

exports.login = function(userDetails, callback) {
	db.login(userDetails, callback);
};

exports.loginPage = function(req, res) {
	var userType = req.body.userType;
	console.log('Login Page', userType);
};

function editPage(req, res) {
	db.getAll(function(apps, pendingApps, users){
		db.getColors(function(colors) {
			res.render('edit', {myObj: apps, pending: pendingApps, categories: colors, pendingUsers : users} );
		});
		
	});
}

exports.editPage = function(req, res){
	editPage(req, res);
};

exports.approveApp = function(req, res) {
	var link = req.body.appLink;
	console.log("link", link);
	db.approveApp(link, function() {
		res.render('edit', {} );
	});
};

exports.removeApp = function(req, res) {
	var link = req.body.appLink;
	var table = req.body.table;
	db.removeApp(link, table, function() {
		db.getAll(function(apps, pendingApps){
			res.render('edit', {myObj: apps, pending: pendingApps} );
		});
	});
};

exports.saveApp = function(req, res) {
	var details = req.body.appToSave;
	var app = {};
	var inputs =  ["name", "link", "image", "category1", "category2", "rating", "id"];
	for (var i = 0; i < inputs.length; i++) {
		app[inputs[i]] = details[i];
	}
	db.saveApp(app);
};

exports.addItem = function(req, res) {
	//db.addNewItem
};

exports.signUp = function(req, res) {
	res.render('signup', {});
};

exports.signUser = function(req, res) {
	var userDetails = {};
	userDetails = req.body;
	console.log('UserDetails', userDetails);
	db.addUser(userDetails, function() {
		//Success or failure
		var callback = {};
		console.log('Password', userDetails['password']);
		callback['success'] = function() {
			res.render('loginSuccess');
		};
		
	});
};

exports.suggest = function(req, res) {
	res.render('suggest', {});
};

exports.suggestApp = function(req, res, imageDir) {
	var appDetails = {};
	var userName = req.body.usernameLabel;
	appDetails = req.body;
	appDetails['image'] = imageDir;
	if(userName)
		appDetails['user'] = userName;
	else
		appDetails['user'] = "Anon";
	console.log('AppDetails', appDetails);
	db.suggestApp(appDetails, function() {
		res.redirect('/');
	});
};

exports.insertApp = function(req, res, imageDir) {
	var appDetails = {};
	var userName = req.body.usernameLabel;
	appDetails = req.body;
	appDetails['image'] = imageDir;
	if(userName)
		appDetails['user'] = userName;
	else
		appDetails['user'] = "Anon";
	console.log('AppDetails', appDetails);
	db.insertApp(appDetails, function() {
		res.redirect('/');
	});
};

exports.restricted = function(req, res) {
	res.render('restricted');
};

exports.applyPage = function(req, res) {
	res.render('apply');
};

exports.sendApplication = function(req, res) {
	var details = req.body;
	console.log("Details", details);
	db.saveApplication(details, function() {
		res.redirect('/');
	});
};

exports.approveUser = function(req, res) {
	var username = req.body.username;
	db.approveUser(username, function() {
		res.render('edit', {} );
	});
};

exports.disapproveUser = function(req, res) {
	var username = req.body.username;
	db.disapproveUser(username, function() {
		res.render('edit', {} );
	});
};
