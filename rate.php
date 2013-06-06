<?php
$url = htmlentities($_GET['url'],ENT_QUOTES,"utf-8");

$con=mysqli_connect("localhost","root","root","apps");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$stmt = mysqli_prepare($con,"UPDATE apps SET rating=rating+1 WHERE app_link=?");
//var_dump($stmt);
//var_dump(mysqli_error($con));
mysqli_stmt_bind_param($stmt, "s", $url);
mysqli_stmt_execute($stmt);

header('Location: index.php');

?>

