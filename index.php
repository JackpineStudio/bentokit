
<!DOCTYPE html><html>
<head>
<title>AppBookmark</title>
<link rel="stylesheet" href="css/basic.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/framework.js"></script>
<link href='http://fonts.googleapis.com/css?family=Exo:300,500' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="images/favicon.ico"/>
<meta name="handheldfriendly" content="true">
<meta name="mobileoptimized" content="240">
<meta name="viewport" content="width=device-width,initial-scale=1,target-densitydpi=device-dpi">
</head>
<body>

<div class="wrapper">
	<div class="menu">
		<div class="fixed">
			<div class="box">
				<a href="javascript:location.reload(true);"><img src="images/appbookmark-logo.png" class="logo" alt="Logo"/>
					<h1>AppBookmark</h1>
				</a>
				<p>Curating only the best free online design tools.</p>
			</div>
			<div class="box">
				
				<p>Follow <a href="#">@appbookmark</a> for any new additions.</p>
			</div>
			<div class="box">
			<ul id="filter">
				<li><h2>Filters</h2></li>
				<li class="current"><a href="#" class="filter">All</a>
				
				<li><a href="#" class="filter html5-style">HTML5</a></li>
				<li><a href="#" class="filter css3-style">CSS3</a></li>
				<li><a href="#" class="filter jquery-style">jQuery</a></li>
				<li><a href="#" class="filter editor-style">Editor</a></li>
				<li><a href="#" class="filter typography-style">Typography</a></li>
				<li><a href="#" class="filter color-style">Color</a></li>
				<li><a href="#" class="filter design-style">Design</a></li>
				<li><a href="#" class="filter framework-style">Framework</a></li>
				<li><a href="#" class="filter cms-style">CMS</a></li>
				<li><a href="#" class="filter utility-style">Utility</a></li>
				<li><a href="#" class="filter animation-style">Animation</a></li>
				
			</ul>
			</div>
			<div class="box">
					<a href="mailto:hi@appbookmark.co">// Suggest an awesome app</a></li>
					<a href="mailto:hi@appbookmark.co">// Report a dead link</a></li>
				
			</div>
			<div class="box">
					
						<p>Created by<a href="https://twitter.com/taulantsulko">@taulantsulko</a></p>
					
			</div>
		</div>
	</div>


<div class="links" >

<ul id="links">  

    
   
<!--    
This was the template I was based on while writting the PHP code

<li class="editor html5">  
        <a href="http://brackets.io/" target="_blank"><img src="images/appbookmark-brackets.png" alt="" height="100" width="100" /><div class="center">Brackets</div></a>  
          <p class="tag html5-style">HTML5</p> <p class="tag editor-style">Editor</p>
        
    </li>  -->
<?php
$con=mysqli_connect("tsulkocom.netfirmsmysql.com","taulant","Erlind88","appbookmark");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM apps");

while($row = mysqli_fetch_array($result))
  {
  echo '<li class="';
  echo $row['class1'];
  echo ' ';
  echo $row['class2'];
  echo '">';
  echo '<a href="frame.php?url=';
  echo $row['app_link'];
  echo '" target="_blank"><img src="images/';
  echo $row['app_icon'];
  echo '" alt="" height="100" width="100" /><div class="center">';
  echo $row['app_name'];
  echo '</div></a><p class="tag ';
  echo $row['class1'];
  echo '-style">';
  echo $row['class1'];
  echo '</p> <p class="tag ';
  echo $row['class2'];
  echo '-style">';
  echo $row['class2'];
  echo '</p></li>';
  
  
  
  }

mysqli_close($con);
?>
   

         
        
</ul> 
</div>
</div>


</body>

</html>