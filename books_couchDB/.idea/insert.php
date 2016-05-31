<?php
$data = json_decode(file_get_contents("php://app"));
$bname = mysql_real_escape_string($data->bname);
$bauthor = mysql_real_escape_string($data->bauthor);
$bprice = mysql_real_escape_string($data->bprice);
$blanguage = mysql_real_escape_string($data->blanguage);
mysql_connect("localhost", "root", "");
mysql_select_db("books");
$query=mysql_query("INSERT INTO `books_product`(`name`, `author`, `price`, `language`) VALUES('".$bname."','".$bauthor."','".$bprice."','".$blanguage."')");
echo $query;
?>