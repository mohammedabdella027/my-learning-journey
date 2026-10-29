<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['cust_id'];

$deleteCustomerInfo = mysqli_prepare($conn, "DELETE FROM cust_table WHERE CUST_ID = ?");

mysqli_stmt_bind_param($deleteCustomerInfo, "s", $id);
mysqli_stmt_execute($deleteCustomerInfo);

if (mysqli_stmt_affected_rows($deleteCustomerInfo) === 1) {
    echo "Customer deleted";
    echo '<br><a href="../customer.html">Back to Customer page</a>';
} else {
    echo "Customer not found";
    echo '<br><a href="../customer.html">Back to Customer page</a>';
}
?>