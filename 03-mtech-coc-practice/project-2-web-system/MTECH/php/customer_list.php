<?php
include "db.php";
/** @var mysqli $conn */

$listCustomerInfo = mysqli_prepare($conn, "SELECT * FROM cust_table");
mysqli_stmt_execute($listCustomerInfo);
$result = mysqli_stmt_get_result($listCustomerInfo);

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['CUST_ID'] . " - " . $row['CUST_NAME'] . " - " . $row['CUST_TYPE'] . " - " . $row['COUNTRY'] . " - " . $row['PHONE'] . "<br>";
}

echo '<a href="../customer.html">Back to customer</a>';
?>