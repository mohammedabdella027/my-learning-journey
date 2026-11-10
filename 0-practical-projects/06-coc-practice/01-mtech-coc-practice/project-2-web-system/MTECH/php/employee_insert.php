<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['emp_id'];
$name = $_POST['emp_name'];
$division = $_POST['division'];

$insertEmployeeInfo = mysqli_prepare($conn, "INSERT emp_table (EMP_ID, EMP_NAME, DIVISION) VALUES (?, ?, ?)");

mysqli_stmt_bind_param($insertEmployeeInfo, "sss", $id, $name, $division);
mysqli_stmt_execute($insertEmployeeInfo);

if (mysqli_stmt_affected_rows($insertEmployeeInfo) === 1) {
    echo "Employee saved";
    echo '<br><a href="../employee.html">Back to Employee page</a>';
} else {
    echo "Employee was not saved";
    echo '<br><a href="../employee.html">Back to Employee page</a>';
}
?>