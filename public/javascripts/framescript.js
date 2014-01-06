$('#clickme').click(function() {
  $('#book').slideUp('slow', function() {
    // Animation complete.
  });
});

$('#rating').click(function(eventObject) {
	eventObject.preventDefault();
	var s = $("meta[name=locale]").attr("content");
    console.log(s);	
    var appName = $("#appName").attr("value");
    var s = "";
    var liked = new Array();
    for (var i = 0; i < cookies.length; i++) {
		var curCookie = cookies[i].trim();
		liked.push(curCookie);
    }
    liked.push(appName);
    var value = liked[0];
    if(liked.length > 1)
    	value = liked.join(',');
    document.cookie = value;
    $.ajax({
		type: 'POST' ,// added,
		url:"/updateRating" ,
		dataType: 'json',
		data: {objectData: s} ,
		success: function (data) {
			var ret = jQuery.parseJSON(data);
			
			
		},
		error: function (xhr, status, error) {
			console.log('Error: ' + error.message);
		}
	});
	$('#rating').fadeOut('slow',function(){
		//Animation 
	});
	return false;
});


