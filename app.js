
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , databaseHandler = require('./node_modules/Database_functions.js')
  , flash = require('connect-flash')
  , fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {
    layout: false
});
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.use(app.router);
app.get('/', routes.home);
app.get("/frame",routes.frame);
app.post("/updateRating", routes.updateRating);
app.use(passport.initialize());
app.use(passport.session());
app.get("/edit", routes.editPage);
app.get('/loginPage', routes.loginPage);
app.post('/login', routes.loginHandler);
app.post("/approve", routes.approveApp);
app.post("/remove", routes.removeApp);
app.get("/addItem", routes.addItem);
app.get("/signup", routes.signUp);
app.post("/signUser", routes.signUser);
app.get("/suggest", routes.suggest)

app.post("/suggestApp", function(req, res, next) {
	console.log("file", req.files);
	fs.readFile(req.files.image.path, function(err, data) {
		var imageName = req.files.image.name;
		if(!imageName) {
			res.redirect('/suggest');
			res.end();
		} else {
			var filePath = "images/" + imageName;
			var path = __dirname + "/public/" + filePath; 
			routes.suggestApp(req, res, filePath);
			fs.writeFile(path, data, function(err) {
				res.redirect('/');
			});
		}
	});
	
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
