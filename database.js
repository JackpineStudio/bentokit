// database connect function for heroku
var mongo = require("mongodb");
var mongoUri = process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  "mongodb://localhost/mydb"; 
var db;
// define database connection function 
var connect = function(){
	// Connect to database if we haven"t already
	if(!db){
		mongo.Db.connect(mongoUri,function(err,myDB){
			if(err) console.log(err);
			else db = myDB;
			insertAllApps();
		})
	}else{
		console.log("we are already connected");
	}
	// insert our hard coded list of apps into the database
	// return database object
	return db;
}
db=connect();

/*
var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db;

// define database connection function 
var connect = function(){
	// Connect to database if we haven"t already
	if(!db){
		var db = new mongo.Db("appsBookMark", new mongo.Server(host,port),{safe:true});
		db.open(function(error){
			if(error)console.log(error);
			else{
				console.log("we connected to the database");
				console.log("checking for empty database");
				insertAllApps();
			}
		});
	}else{
		console.log("we are already connected");
	}

	// return database object
	return db;
}
db= connect();
*/
var insertAllApps = function(){
	console.log("inserting");
	var appsArray = [{name: "3D CSS Text",link:"http://www.3dcsstext.com/",image:"images/appbookmark-3d.png",c1: "css3",c2: undefined},
{name:"@font-face Generator", link: "http://www.fontsquirrel.com/fontface/generator", image:"images/appbookmark-fontkitgenerator.png",c1:  "css3", c2: "typography"},
{name:"Adobe Kuler", link:"https://kuler.adobe.com/",image:"images/appbookmark-kuler.png",c1:  "color",c2: undefined},
{name:"animatable", link:"http://leaverou.github.com/animatable/",image:"images/appbookmark-animatable.png", c1: "css3",c2: "animation"},
{name:"Animate.css",link: "http://daneden.me/animate/",image:"images/appbookmark-animatecss.png", c1: "css3",c2: "animation"},
{name:"ArcText.js",link: "http://tympanus.net/Development/Arctext/",image:"images/appbookmark-arc.jpg", c1: "jquery",c2: "typography"},
{name:"Baseline", link:"http://www.baselinecss.com/",image:"images/appbookmark-baseline.png", c1: "typography",c2: "framework"},
{name:"Bee CSS",link: "http://beecss.theextremewebdesigns.com/",image:"images/appbookmark-bee.png",c1:  "css3",c2: undefined},
{name:"Bootstrap",link: "http://twitter.github.com/bootstrap/",image:"images/appbookmark-bootstrap.png",c1:  "html5",c2: "framework"},
{name:"border-radius",link: "http://border-radius.com/",image:"images/appbookmark-borderradius.png", c1: "css3",c2: undefined},
{name:"Brackets",link: "http://brackets.io/", image:"images/appbookmark-brackets.png",c1:  "html5",c2: "editor"},
{name:"Brand Colors", link:"http://brandcolors.net/", image:"images/appbookmark-bc.png",c1:  "css3",c2: "color"},
{name:"Button Maker", link:"http://css-tricks.com/examples/ButtonMaker/",image:"images/appbookmark-button.png",c1:  "css3",c2: undefined},
{name:"Codepen",link: "http://codepen.io/pen",image:"images/appbookmark-codepen.png", c1:"html5",c2: "editor"},
{name:"Color Oracle",link: "http://colororacle.org/",image:"images/appbookmark-colororacle.png",c1:"color",c2: "design"},
{name:"Color Scheme Designer", link:"http://colorschemedesigner.com/",image:"images/appbookmark-colorscheme.jpg",c1: "color",c2: undefined},
{name:"ColorRotate",link: "http://web.colorotate.org/",image:"images/appbookmark-colorotate.jpg",c1: "color",c2: undefined},
{name:"Colour Lovers", link:"http://www.colourlovers.com/",image:"images/appbookmark-colourlover.png",c1: "color",c2: undefined},
{name:"CSS Arrow Please",link: "http://cssarrowplease.com/",image:"images/appbookmark-cssarrow.png", c1:"css3",c2: undefined},
{name:"CSS Load", link:"http://cssload.net/",image:"images/appbookmark-cssload.png",c1: "css3",c2: undefined},
{name:"CSS3 Generator", link:"http://css3generator.com/",image:"images/appbookmark-css3generator.png",c1: "css3",c2: undefined},
{name:"CSS3 Maker", link:"http://www.css3maker.com/",image:"images/appbookmark-css3maker.png",c1: "css3",c2: "animation"},
{name:"CSS3 Patterns",link: "http://lea.verou.me/css3patterns/",image:"images/appbookmark-csspattern.png",c1: "css3",c2: undefined},
{name:"CSS3 Rotation", link:"https://developer.cdn.mozilla.net/media/uploads/demos/a/l/alejo_moz/aa728b1caa4a6eb5766f6e580543758a/css3-rotations-gener_1356868985_demo_package/index.html", image:"images/appbookmark-divrotate.png", c1:"css3",c2: undefined},
{name:"cubic-bezier", link:"http://cubic-bezier.com/",image:"images/appbookmark-cubicbezier.png", c1:"css3",c2: "animation"},
{name:"Drupal", link:"http://drupal.org/download",image:"images/appbookmark-drupal.png", c1:"cms",c2:  undefined},
{name:"Estimator by Astuteo",link: "http://astuteo.com/estimator/", image:"images/appbookmark-estimator.png", c1:"utility",c2: undefined},
{name:"FitText", link:"http://fittextjs.com/",image:"images/appbookmark-fittext.png",c1: "jquery",c2:  "typography"},
{name:"Flatstrap", link:"http://littlesparkvt.com/flatstrap/index.html",image:"images/appbookmark-flatstrap.png", c1:"html5", c2:"framework"},
{name:"Flex Slider",link: "http://astuteo.com/estimator/",image:"images/appbookmark-flex.png",c1: "jquery",c2: "css3"},
{name:"Font Constructor", link:"http://www.fontconstructor.com/download/index.html",image:"images/appbookmark-fontconstructor.png",c1: "editor",c2: "typography"},
{name:"FontAwesome",link: "http://fortawesome.github.com/Font-Awesome/",image:"images/appbookmark-fontawesome.png",c1: "typography",c2: "framework"},
{name:"Fontstruct", link:"http://fontstruct.com/sign_in/fontstructor",image:"images/appbookmark-fontstruct.png",c1: "editor ",c2: "typography"},
{name:"Foundation",link: "http://foundation.zurb.com/", image:"images/appbookmark-foundation.png",c1: "html5",c2: "framework"},
{name:"GIMP",link: "http://www.gimp.org/downloads/", image:"images/appbookmark-gimp.png",c1: "design",c2: "editor"},
{name:"Google Web Fonts",link: "http://www.google.com/webfonts",image:"images/appbookmark-webfonts.png",c1: "css3",c2: "typography"},
{name:"Grid-A-Licious", link:"http://suprb.com/apps/gridalicious/",image:"images/appbookmark-gridalicious.png",c1: "jquery",c2: undefined},
{name:"GuideGuide", link:"http://guideguide.me/", image:"images/appbookmark-guideguide.png",c1: "design",c2: undefined},
{name:"HTML5 Boilerplate",link: "http://html5boilerplate.com/",image:"images/appbookmark-html5boilerplate.png",c1: "html5",c2: "framework"},
{name:"iBooks Author",link: "https://itunes.apple.com/us/app/ibooks-author/id490152466?ls=1&mt=12",image:"images/appbookmark-ibookauthor.png",c1: "design",c2: "editor"},
{name:"ImageOptim", link:"http://imageoptim.com/", image:"images/appbookmark-imageoptim.png", c1:"design",c2: "utility"},
{name:"Inkscape", link:"http://inkscape.org/download/?lang=en", image:"images/appbookmark-inkscape.png",c1: "design",c2: "editor"},
{name:"jQuery UI",link: "http://jqueryui.com/",image:"images/appbookmark-jqueryui.png", c1:"jquery",c2: "framework"},
{name:"Js Fiddle",link: "http://jsfiddle.net/",image:"images/appbookmark-jsfiddle.png", c1:"editor",c2: "html5"},
{name:"Komodo Edit",link: "http://www.activestate.com/komodo-edit/downloads",image:"http://code.activestate.com/static/img/komodo6.png",c1: "html5",c2: "editor"},
{name:"Layer Styles",link: "http://layerstyles.org/",image:"images/appbookmark-layerstyles.png",c1: "css3",c2: undefined},
{name:"Lettering.js",link: "http://letteringjs.com/", image:"images/appbookmark-lettering.png",c1: "jquery", c2:"typography"},
{name:"MindNode Lite",link: "https://itunes.apple.com/ca/app/mindnode-lite/id402397683?mt=12",image:"images/appbookmark-mindnode.png",c1: "utility",c2: undefined},
{name:"Notepad++",link: "http://notepad-plus-plus.org/download/",image:"images/appbookmark-notepad.png",c1: "html5",c2: "editor"},
{name:"PSD Covers",link: "http://www.psdcovers.com/",image:"images/appbookmark-psdcovers.png",c1: "design",c2:  undefined},
{name:"Raptor Editor",link: "http://www.raptor-editor.com/",image:"images/appbookmark-raptor.png",c1: "html5",c2: "editor"},
{name:"Sass.",link: "http://sass-lang.com/",image:"images/appbookmark-sass.png",c1: "css3",c2: "framework"},
{name:"slabText.js",link: "http://www.frequency-decoder.com/demo/slabText/",image:"images/appbookmark-slabtext.png",c1: "jquery",c2: "typography"},
{name:"Subtle Patterns",link: "http://subtlepatterns.com/",image:"images/appbookmark-subtle.png",c1: "design",c2: undefined},
{name:"Sumo Paint",link: "http://www.sumopaint.com/app/", image:"images/appbookmark-sumopaint.png",c1: "design",c2: "editor"},
{name:"Ultimate CSS Gradient",link: "http://www.colorzilla.com/gradient-editor/",image:"images/appbookmark-cssgradient.png",c1: "color", c2:"css3"},
{name:"Weebly",link: "http://www.weebly.com/", image:"images/appbookmark-weebly.png",c1: "cms",c2: undefined},
{name:"WhatTheFont",link: "http://www.myfonts.com/WhatTheFont/", image:"images/appbookmark-whatthefont.png",c1: "typography",c2: undefined},
{name:"wireframe.cc",link: "http://wireframe.cc/", image:"images/appbookmark-wireframe.png",c1: "utility",c2: "editor"},
{name:"Wordmark it!",link: "http://wordmark.it/",image:"images/appbookmark-wordmarkit.png",c1: "typography",c2: undefined},
{name:"Wordpress",link: "http://wordpress.org/download/",image:"http://s.wordpress.org/about/images/logos/wordpress-logo-notext-rgb.png",c1: "cms",c2: undefined},
{name:"x-icon editor",link: "http://www.xiconeditor.com/",image:"images/appbookmark-xicon.png", c1:"design",c2: "editor"},
{name:"{less}",link: "http://lesscss.org/",image:"images/appbookmark-less.png",c1:"css3",c2: "framework"}];

	db.collection("apps",function(error,collection){
		if(error) console.log(error);
		else console.log("we have the collection");
		collection.find().count(function(error,count){
			if(count == 0){
				collection.insert(appsArray,function(error){
					if(error) console.log(error);
				});
			}
		});
		
	});
}
exports.updateRating= function(href,callback){
    console.log("href is"+ href);
	db.collection("apps",function(error,collection){
		collection.findOne({link: href },function(error,doc){
				if(error) console.log(error);
				else console.log( doc);
				if(doc.rating == undefined)
					doc.rating = 1;
				else doc.rating = doc.rating +1;
			console.log(doc);
			collection.save(doc,callback);
		});
	});
};
exports.getAllApps = function (callback){
	db.collection("apps",function(error,collection){  
	collection.find(function(error,cursor){
		cursor.toArray(function(error,list){
			console.log(list);
			callback(list);
		});
	});
	});
};

exports.findbyUsername = function(username, fn) {
	db.collection("users", function(error, collection) {
		collection.findOne({username: username}, function(error, doc) {
			if(error) console.log(error);
			else console.log("User", doc);
			
		});
	});
};

exports.putUser = function(username, password) {
	db.collection("users", function(error, collection) {
		collection.find({username: username}).count(function(error, count) {
			if(count == 0) {
				var userDetails = [{username: username, password: password, usertype: null}];
				collection.insert(userDetails, function(error) {
					if(error) console.log(error);
				});
			}
		})
	});
}

