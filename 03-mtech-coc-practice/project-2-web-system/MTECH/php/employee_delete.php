<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['emp_id'];

$deleteEmployeeInfo = mysqli_prepare($conn, "DELETE FROM emp_table WHERE EMP_ID = ?");

mysqli_stmt_bind_param($deleteEmployeeInfo, "s", $id);
mysqli_stmt_execute($deleteEmployeeInfo);

if (mysqli_stmt_affected_rows($deleteEmployeeInfo) === 1) {
    echo "Employee deleted";
} else {
    echo "Employee was not found";
}

echo '<br><a href="../employee.html">Back to Employee page</a>';
?>