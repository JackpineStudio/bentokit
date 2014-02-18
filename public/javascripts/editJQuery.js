$(document).ready(function(){ 
	$('.approveButton').click(function(eventObject) {
		eventObject.preventDefault();
		var app = $(this).attr('id');
		console.log("app name", app);
		$.ajax({
			type: 'POST',
			url: '/approve',
			dataType: 'json',
			data: {appLink: app},
			complete: function(data) {
				location.reload();
			},
			error: function(xhr, status, error) {
				console.log("Error:", error);
			}
		});
		
	});
	
	$('.approveUserButton').click(function(eventObject) {
		var user = $(this).attr('id');
		decideUser(user, "approve");
	});

	$('.disapproveUserButton').click(function(eventObject) {
		var user = $(this).attr('id');
		decideUser(user, "disapprove");
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
		var appID = $(this).attr('id');
		var inputs =  ["name", "link", "image", "category1", "category2", "rating"];
		if($(this).hasClass("glyphicon-edit")) {
			//show editing form
			for (var i = 0; i < inputs.length; i++) {
				var className = "." + appID + "." + inputs[i];
				$curInput = $(className);
				$curInput.prop('disabled', false);
				$curInput.css('border', '2px inset');
				$curInput.addClass('form-control');
			}
			$(this).attr('class', "approveEditButton glyphicon glyphicon-ok");
			
		} else if($(this).hasClass('glyphicon-ok')) {
			//Done editing, save
			var details = [];
			for (var i = 0; i < inputs.length; i++) {
				var className = "." + appID + "." + inputs[i];
				$curInput = $(className);
				$curInput.prop('disabled', true);
				$curInput.css('border', '0');
				$curInput.removeClass('form-control');
				val = $curInput.val();
				if(val != null)
					details[i] = val;
				else
					details[i] ="";
			}
			details.push(appID);
			$(this).attr('class', "approveEditButton glyphicon glyphicon-edit");
			editApp(details);
		}
	});
	
	$('.approveEditButton').click(function(eventObject){
		eventObject.preventDefault();
		$(this).hide();
		//$(this).attr('class', "editButton glyphicon glyphicon-edit");
	});
	
	function decideUser(user, decision) {
		var urlA = "/approveUser"
		if(decision != "approve")
			urlA = "/disapproveUser";
		$.ajax({
			type: 'POST',
			url: urlA,
			dataType: 'json',
			data: {username: user},
			complete: function(data) {
				location.reload();
			},
			error: function(xhr, status, error) {
				console.log("Error:", error);
			}
		});
	}

	function removeApp(app, type) {
		$.ajax({
			type: 'POST',
			url: '/remove',
			dataType: 'json',
			data: {appLink: app, table: type},
			complete: function(data) {
				console.log("Removed");
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
			dataType: 'json',
			data: {appToSave: app},
			complete: function(data) {
				console.log("Done saving");
				//location.reload(); //?Maybe
			},
			error: function(xhr, status, error) {
				console.log("Error:", error);
			}
		});
	}
});







