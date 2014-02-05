$(document).ready(function(){ 
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
		var appID = $(this).attr('id');
		var inputs =  ["name", "link", "image", "category1", "category2", "rating"];
		if($(this).hasClass("glyphicon-edit")) {
			//show editing form
			for (var i = 0; i < inputs.length; i++) {
				var className = "." + appID + "." + inputs[i];
				console.log(className);
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
				console.log("Class name", className);
				$curInput = $(className);
				$curInput.prop('disabled', true);
				$curInput.css('border', '0');
				$curInput.removeClass('form-control');
				console.log(inputs[i], $curInput.val());
				val = $curInput.val();
				if(val != null)
					details[i] = val;
				else
					details[i] ="";
				console.log(i, details[i]);
			}
			details.push(appID);
			
			console.log("details", details);
			$(this).attr('class', "approveEditButton glyphicon glyphicon-edit");
			editApp(details);
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







