<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$readNotification = new Notification($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("notificationId", $_GET)) {
  // get data
  $readNotification->notification_aid = $_GET['notificationId'];
  checkId($readNotification->notification_aid);

  $query = checkDelete($readNotification);

  returnSuccess($readNotification, "notification", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
