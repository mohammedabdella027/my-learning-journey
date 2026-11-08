<?php
include "db.php";
/** @var mysqli $conn */

$listItemInfo = mysqli_prepare($conn, "SELECT * FROM item_table");
mysqli_stmt_execute($listItemInfo);
$result = mysqli_stmt_get_result($listItemInfo);

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['ITEM_ID'] . " - " . $row['ITEM_NAME'] . " - " . $row['TRADE_TYPE'] . "<br>";
}

echo '<a href="../item.html">Back to Item page</a>';
?>