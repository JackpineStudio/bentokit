$('#clickme').click(function() {
  $('#book').slideUp('slow', function() {
    // Animation complete.
  });
});

$('#rating').click(function(eventObject) {
	eventObject.preventDefault();
	var s = $("meta[name=locale]").attr("content");
    console.log(s);	
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


