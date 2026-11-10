<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['item_id'];

$deleteItemInfo = mysqli_prepare($conn, "DELETE FROM item_table WHERE ITEM_ID = ?");

mysqli_stmt_bind_param($deleteItemInfo, "s", $id);
mysqli_stmt_execute($deleteItemInfo);

if (mysqli_stmt_affected_rows($deleteItemInfo) === 1) {
    echo "Item deleted";
} else {
    echo "Item was not found";
}

echo '<br><a href="../item.html">Back to Item page</a>';
?>