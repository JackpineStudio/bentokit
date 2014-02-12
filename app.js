
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
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
app.get("/edit", routes.editPage);
app.get('/loginPage', routes.loginPage);
app.post('/login2', routes.loginHandler);
app.post("/approve", routes.approveApp);
app.post("/remove", routes.removeApp);
app.get("/addItem", routes.addItem);
app.get("/signup", routes.signUp);
app.post("/signUser", routes.signUser);
app.get("/suggest", routes.suggest);
app.post("/saveApp", routes.saveApp);

app.post("/suggestApp", function(req, res, next) {
	console.log("file", req.files);
	//check for usertype
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

app.post("/insertApp", function(req, res, next) {
	console.log("file", req.files);
	//check for usertype
	fs.readFile(req.files.image.path, function(err, data) {
		var imageName = req.files.image.name;
		if(!imageName || imageName == "") {
			console.log("No image");
			routes.insertApp(req, res, "");
			res.redirect('/edit');
			res.end();
		} else {
			var filePath = "images/" + imageName;
			var path = __dirname + "/public/" + filePath; 
			routes.insertApp(req, res, filePath);
			fs.writeFile(path, data, function(err) {
				res.redirect('/edit');
			});
		}
	});
});

app.get("/loginSuccess", routes.loginSuccess);
app.post('/login', routes.loginHandler);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
