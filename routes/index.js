var db = require('../node_modules/Database_functions.js');
/*
 * GET home page.
 */
exports.updateRating = function(req,res){
	console.log("Update Rating");
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

exports.home = function(req,res){
	db.getAllApps(function(data){
		data.sort(function(a,b){
			if(a.rating == undefined)
				a.rating = 0;
			if(b.rating == undefined)
				b.rating = 0;
			return b.rating-a.rating;
		});
		res.render('index', {myObj: data} );
	});
};

exports.login = function(userDetails, callback) {
	login(userDetails, callback);
	
};

function login(userDetails, callback) {
	console.log("index", "Trying login");
	db.login(userDetails, callback);
}

exports.loginSuccess = function() {
	loginSuccess();
	
	
};

function loginSuccess(user) {
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
	var callback = {};
	callback['success'] = function(user) {
		loginSuccess(user);
		res.redirect('/');
	};
	callback['failure'] = loginFailure;
	login(userDetails, callback);
};