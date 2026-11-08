<?php
include "db.php";
/** @var mysqli $conn */

$id = $_POST['item_id'];

$searchItemInfo = mysqli_prepare($conn, "SELECT * FROM item_table WHERE ITEM_ID = ?");

mysqli_stmt_bind_param($searchItemInfo, "s", $id);
mysqli_stmt_execute($searchItemInfo);
$result = mysqli_stmt_get_result($searchItemInfo);

if (mysqli_num_rows($result) === 1) {
    $rows = mysqli_fetch_assoc($result);
    echo "ID: " . $rows['ITEM_ID'];
    echo "<br>Name: " . $rows['ITEM_NAME'];
    echo "<br>Trade type: " . $rows['TRADE_TYPE'];
} else {
    echo "Item was not found";
}

echo '<br><a href="../item.html">Back to Item page</a>';
?>