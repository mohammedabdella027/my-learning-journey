<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['item_id'];
$name = $_POST['item_name'];
$type = $_POST['trade_type'];

$insertItemInfo = mysqli_prepare($conn, "INSERT item_table (ITEM_ID, ITEM_NAME, TRADE_TYPE) VALUES (?, ?, ?)");

mysqli_stmt_bind_param($insertItemInfo, "sss", $id, $name, $type);
mysqli_stmt_execute($insertItemInfo);

if (mysqli_stmt_affected_rows($insertItemInfo) === 1) {
    echo "Item saved";
    echo '<br><a href="../item.html">Back to Item page</a>';
} else {
    echo "Item was not saved";
    echo '<br><a href="../item.html">Back to Item page</a>';
}
?>