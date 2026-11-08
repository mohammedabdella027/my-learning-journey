<?php
include "db.php";
/** @var mysqli $conn */

$account = $_POST['account'];
$password = $_POST['password'];

$selectLoginTable = mysqli_prepare($conn, "SELECT * FROM login_table WHERE ACCOUNT = ? AND `PASSWORD` = ?");

mysqli_stmt_bind_param($selectLoginTable, "ss", $account, $password);
mysqli_stmt_execute($selectLoginTable);
$result = mysqli_stmt_get_result($selectLoginTable);

if (mysqli_num_rows($result) === 1) {
    header("Location: ../index.html");
    exit;
} else {
    echo "Invalid account or password";
    echo '<br><a href="../login.html">Back to login</a>';
}
?>