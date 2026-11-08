<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['cust_id'];
$name = $_POST['cust_name'];
$type = $_POST['cust_type'];
$country = $_POST['country'];
$phone = $_POST['phone'];

$insertInfoCustomer = mysqli_prepare($conn, "INSERT cust_table (CUST_ID, CUST_NAME, CUST_TYPE, COUNTRY, PHONE) VALUES (?, ?, ?, ?, ?)");

mysqli_stmt_bind_param($insertInfoCustomer, "sssss", $id, $name, $type, $country, $phone);
mysqli_stmt_execute($insertInfoCustomer);

if (mysqli_stmt_affected_rows($insertInfoCustomer) === 1) {
    echo "Customer saved";
    echo '<br><a href="../customer.html">Back to Customer page</a>';
} else {
    echo "Customer was not saved";
    echo '<br><a href="../customer.html">Back to Customer page</a>';
}
?>