$('.approveButton').click(function(eventObject) {
	eventObject.preventDefault();
	//alert(eventObject.currentTarget);
	var app = $(this).attr('id');
	$.ajax({
		type: 'POST',
		url: '/approve',
		dataType: 'json',
		data: {appLink: app},
		complete: function(data) {
			console.log("Approved", data);
		},
		error: function(xhr, status, error) {
			console.log("Error:", error);
		}
	});
	
});

$('.removeButton').click(function(eventObject) {
	eventObject.preventDefault();
	var app = $(this).attr('id');
	$.ajax({
		type: 'POST',
		url: '/remove',
		dataType: 'json',
		data: {appLink: app},
		complete: function(data) {
			console.log("Removed", data);
		},
		error: function(xhr, status, error) {
			console.log("Error:", error);
		}
	});
	
});