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
  // check data
  checkPayload($data);
  // get data
  $readNotification->notification_aid = $_GET['notificationId'];
  $readNotification->notification_name = $data["notification_name"];
  $readNotification->notification_email = $data["notification_email"];
  $readNotification->notification_phone_no = $data["notification_phone_no"];
  $readNotification->notification_purpose = $data["notification_purpose"];
  $readNotification->notification_updated = date("Y-m-d H:i:s");
  checkId($readNotification->notification_aid);


  //checks current data to avoid same entries from being updated
  $notification_name_old = checkIndex($data, 'notification_name_old');
  compareName($readNotification, $notification_name_old, $readNotification->notification_name);

  // update
  $query = checkUpdate($readNotification);
  returnSuccess($readNotification, "notification", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
