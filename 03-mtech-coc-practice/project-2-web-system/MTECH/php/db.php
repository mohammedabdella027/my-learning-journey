<?php
$conn = mysqli_connect("localhost", "root", "root", "company");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>