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
		var app = {};
		var appLink = $(this).attr('id');
		if($(this).hasClass("glyphicon-edit")) {
			//show editing form
			$(this).attr('class', "approveEditButton glyphicon glyphicon-ok");
			
		} else if($(this).hasClass('glyphicon-ok')) {
			//Done editing, save
			var table = $("#linksTable");
			var className = appLink.replace("http://", "");
			console.log(className);
			
			app['name'] = $("#nameInput").val();
			app['link'] = $("#linkInput").val();
			app['image'] = "";
			app['category1'] = $("#category1Input").val();
			app['category2'] = $("#category2Input").val();
			app['rating'] = 0;
			app['oldLink'] = appLink;
			editApp(app);
			$(this).attr('class', "approveEditButton glyphicon glyphicon-edit");
		}
	});
	
	$('.approveEditButton').click(function(eventObject){
		eventObject.preventDefault();
		$(this).hide();
		//$(this).attr('class', "editButton glyphicon glyphicon-edit");
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
	
	function editApp(app) {
		$.ajax({
			type: 'POST',
			url: '/saveApp',
			data: {appToSave: app},
			complete: function(data) {
				console.log("Done saving");
				location.reload(); //?Maybe
			},
			error: function(xhr, status, error) {
				console.log("Error:", error);
			}
		});
	}
});







