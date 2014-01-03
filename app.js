
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , databaseHandler = require('./node_modules/Database_functions.js');

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
app.post("/updateRating",routes.updateRating);
app.use(passport.initialize());
app.use(passport.session());
app.post('/login',
		passport.authenticate('local', {successRedirect: '/success',
										failureRedirect: '/login',
										failureFlash: true})
		);

passport.use(new LocalStrategy(
		function(username, password, done) {
			User.findOne({username: username}, function(err, user) {
				if (err) {return done(err);}
				if (!user) {
					return done(null, false, {message : "Incorrect username."});
				}
				if (!user.validPassword(password)) {
					return done(null, false, {message: "Incorrect password."});
				}
				return done(null, user);
			});
		}));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
