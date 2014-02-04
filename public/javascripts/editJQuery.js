$(document).ready(function(){ 
	console.log("Ready");
	
	$('.approveButton').click(function(eventObject) {
		eventObject.preventDefault();
		var app = $(this).attr('id');
		$.ajax({
			type: 'POST',
			url: '/approve',
			dataType: 'json',
			data: {appLink: app},
			complete: function(data) {
				console.log("Approved", data);
				location.reload();
			},
			error: function(xhr, status, error) {
				console.log("Error:", error);
			}
		});
		
	});
	
	$('.removeButton').click(function(eventObject) {
		eventObject.preventDefault();
		var app = $(this).attr('id');
		if (confirm('Are you sure you want to remove this app?')) {
			removeApp(app, 'pendingApps');
		}
	});
	
	$('.removeAppButton').click(function(eventObject) {
		eventObject.preventDefault();
		var app = $(this).attr('id');
		if (confirm('Are you sure you want to remove this app?')) {
			removeApp(app, 'apps');
		}
	});
	
	$('.editButton').click(function(eventObject) {
		eventObject.preventDefault();
	});
	
	function removeApp(app, type) {
		$.ajax({
			type: 'POST',
			url: '/remove',
			dataType: 'json',
			data: {appLink: app, table: type},
			complete: function(data) {
				console.log("Removed", data);
				location.reload();
			},
			error: function(xhr, status, error) {
				console.log("Error:", error);
			}
		});
	}
});







