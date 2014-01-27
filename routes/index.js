var db = require('../node_modules/Database_functions.js');
/*
 * GET home page.
 */
exports.updateRating = function(req,res){
	console.log("Update Rating");
	var object = (req.body.objectData);
	db.updateRating(object);
};

exports.approveApp = function(req, res) {
	var object = "";
	db.approveApp(object);
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

function home(req, res) {
	db.getAllApps(function(data) {
		data.sort(function(a,b) {
			if(a.rating == undefined)
				a.rating = 0;
			if(b.rating == undefined)
				b.rating = 0;
			return b.rating-a.rating;
		});
		res.render('index', {myObj: data} );
	});
}

exports.login = function(userDetails, callback) {
	login(userDetails, callback);
	
};

exports.home = function(req,res){
	home(req, res);
};

function login(userDetails, callback) {
	console.log("index", "Trying login");
	db.login(userDetails, callback);
}

exports.loginSuccess = function() {
	loginSuccess();
	
	
};

function loginSuccess(user, req, res) {
	console.log("index", "Login Success", user); 
	
}

exports.loginFailure = function() {
	loginFailure();
};

function loginFailure() {
	console.log("Cannot login");
	
}

exports.loginHandler = function (req, res) {
	var userDetails = {};
	userDetails['username'] = req.body.username;
	userDetails['password'] = req.body.password;
	console.log('username', userDetails['username'], 'password', userDetails['password'] );
	db.getAll(function(apps, pendingApps){
		res.render('edit', {myObj: apps, pending: pendingApps} );
	});
	var callback = {};
	callback['success'] = function(user) {
		loginSuccess(user);
		//res.render('index',{myObj: data, userType:user['userType']});
		console.log('Usertype',user['userType']);
		if(user['userType'] == 'moderator') {
			console.log('moderator');
			//editPage(req, res);
			//res.redirect('/');
			//home(req, res);
			
		} else {
			console.log('regular user');
			home(req, res);
		}
		
	};
	callback['failure'] = loginFailure;
	login(userDetails, callback);
};

exports.loginPage = function(req, res) {
	var userType = req.body.userType;
	console.log('Login Page', userType);
};

function editPage(req, res) {
	db.getAll(function(apps, pendingApps){
		res.render('edit', {myObj: apps, pending: pendingApps} );
	});
}

exports.editPage = function(req, res){
	/*console.log('UserType', req.body.userType);
	db.getAll(function(apps, pendingApps){
		res.render('edit', {myObj: apps, pending: pendingApps} );
	});*/
	editPage(req, res);
};

exports.approveApp = function(req, res) {
	var link = req.body.appLink;
	db.approveApp(link, function() {
		res.render('edit', {} );
	});
};

exports.removeApp = function(req, res) {
	var link = req.body.appLink;
	db.removeApp(link, function() {
		db.getAll(function(apps, pendingApps){
			res.render('edit', {myObj: apps, pending: pendingApps} );
		});
	});
};

exports.addItem = function(req, res) {
	//db.addNewItem
};

exports.signUp = function(req, res) {
	//db.getUsers(function(users) {
		res.render('signup', {});
	//});
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
			res.redirect('/');
		};
		
	});
};

exports.suggest = function(req, res) {
	res.render('suggest', {});
};

exports.suggestApp = function(req, res) {
	var appDetails = {};
	appDetails = req.body;
	appDetails['user'] = "bob";
	console.log('AppDetails', appDetails);
	db.suggestApp(appDetails, function() {
		res.redirect('/');
	});
};