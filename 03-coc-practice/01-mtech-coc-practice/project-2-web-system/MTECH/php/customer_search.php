<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['cust_id'];

$searchCustomerInfo = mysqli_prepare($conn, "SELECT * FROM cust_table WHERE CUST_ID = ?");

mysqli_stmt_bind_param($searchCustomerInfo, "s", $id);
mysqli_stmt_execute($searchCustomerInfo);
$result = mysqli_stmt_get_result($searchCustomerInfo);

if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    echo "ID: " . $row['CUST_ID'];
    echo "<br>Name: " . $row['CUST_NAME'];
    echo "<br>Type: " . $row['CUST_TYPE'];
    echo "<br>Country: " . $row['COUNTRY'];
    echo "<br>Phone: " . $row['PHONE'];
} else {
    echo "Customer not found";
}

echo '<br><a href="../customer.html">Back to Customer page</a>';
?>