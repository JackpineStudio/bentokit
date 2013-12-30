


$(document).ready(function() {
	$('ul#filter a').click(function() {
		$(this).css('outline','none');
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
		var itemsLength = $('ul#links li:visible').length;
		$('ul#links li:visible').each(function(i) {
			$(this).fadeOut('slow', function(){if(itemsLength == ++i){show(filterVal);}});
		});
		return false;
	});

});

function show(filterVal){
	if(filterVal == 'all') {
		$('ul#links li').fadeIn('slow');
	} else {
		$('ul#links li').each(function(){
		if($(this).hasClass(filterVal)) {
			$(this).fadeIn('slow');
			}	
		});
	}
}
