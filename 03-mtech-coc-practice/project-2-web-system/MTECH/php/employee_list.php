<?php
include "db.php";
/** @var mysqli $conn */

$listEmployeeInfo = mysqli_prepare($conn, "SELECT * FROM emp_table");
mysqli_stmt_execute($listEmployeeInfo);
$result = mysqli_stmt_get_result($listEmployeeInfo);

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['EMP_ID'] . " - " . $row['EMP_NAME'] . " - " . $row['DIVISION'] . "<br>";
}

echo '<a href="../employee.html">Back to employee page</a>';
?>