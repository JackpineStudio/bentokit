<?php
$url = htmlentities($_GET['url'],ENT_QUOTES,"utf-8");
?>

<!DOCTYPE html><html>
<head>
<title>AppBookmark</title>
<link rel="stylesheet" href="css/basic.css"/>
<link rel="stylesheet" href="css/frame.css"/>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/framework.js"></script>
<link href='http://fonts.googleapis.com/css?family=Exo:300,500' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="images/favicon.ico"/>
<meta name="handheldfriendly" content="true">
<meta name="mobileoptimized" content="240">
<meta name="viewport" content="width=device-width,initial-scale=1,target-densitydpi=device-dpi">
<style>
img {
	margin: 10px;
}

.close{
	float: right;
}

.rating{
	position: relative;
	display: inline-block;
	color: #fff;
	font-size: .75em;
	padding: 0;
	margin: 0 0 20px 0;
	height: 20px;
}
p{
	display: inline-block;
	height: 0;
}
#rating{
	color: #333;
	background-color: #fff;
	text-decoration: none;
	padding: 5px;
	border-radius: 3px;
}
#rating:hover{
	color: #fff;
	background-color: #333;
}

iframe{
	border: none;
}
</style>
</head>
<body>

<header>
<div class="header" id="book">
<a href="http://appbookmark.co" ><img src="images/appbookmark-logo-frame.png"  height="24px" alt="AppBookmark Logo"/></a>

<a id="rating" href="rate.php?url=<?php echo $url; ?>">Like this app</a>

<!--<div class="rating"><p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Did you find this app useful?&nbsp;</p><p><input type="radio">Yes</p><p>&nbsp;/&nbsp;</p><p ><input type="radio">No</p></p></div>-->

<a href="#" id="clickme"><img src="images/appbookmark-close.png" class="close"  height="24px" alt="(X) Close"/></a></div>
</header>


<iframe src="<?php echo $url; ?>"></iframe>

<script >
$('#clickme').click(function() {
  $('#book').slideUp('slow', function() {
    // Animation complete.
  });
});

$('#rating').click(function(eventObject) {
	eventObject.preventDefault();
$.get('rate.php', {url:"<?php echo $url; ?>"}, function(data) {
  alert('Thanks for rating!');
});

});
</script>

</body>
</html>