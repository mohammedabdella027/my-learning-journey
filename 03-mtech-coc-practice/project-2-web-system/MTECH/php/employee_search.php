<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['emp_id'];

$searchEmployeeInfo = mysqli_prepare($conn, "SELECT * FROM emp_table WHERE EMP_ID = ?");

mysqli_stmt_bind_param($searchEmployeeInfo, "s", $id);
mysqli_stmt_execute($searchEmployeeInfo);
$result = mysqli_stmt_get_result($searchEmployeeInfo);

if (mysqli_num_rows($result) === 1) {
    $rows = mysqli_fetch_assoc($result);
    echo "ID: " . $rows['EMP_ID'];
    echo "<br>Name: " . $rows['EMP_NAME'];
    echo "<br>Division: " . $rows['DIVISION'];
} else {
    echo "Employee not found";
}

echo '<br><a href="../employee.html">Back to Employee page</a>';
?>