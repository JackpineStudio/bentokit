var db = require('../node_modules/Database_functions.js');
/*
 * GET home page.
 */
exports.updateRating = function(req,res){
	var object = (req.body.objectData);
	console.log(object); 
	db.updateRating(object,function(){
		console.log("rating updated");
	});
};

exports.frame = function(req, res){
  console.log(req.query);
  var link = req.query.user.link;
  console.log(link);
  var object = -1;
  object = db.getApp(link);
  var value = -1, name = "";
  if(object != -1 ) {
	  value = object.getRating();
	  name = object.getName();
  }
  res.render('frame',{frameSrc: link, rating: value, curApp:name}); 
};

exports.home= function(req,res){
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

