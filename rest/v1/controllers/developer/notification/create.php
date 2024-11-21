<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$readNotification = new Notification($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$readNotification->notification_is_active = 1;
$readNotification->notification_name = $data["notification_name"];
$readNotification->notification_email = $data["notification_email"];
$readNotification->notification_phone_no = $data["notification_phone_no"];
$readNotification->notification_purpose = $data["notification_purpose"];
$readNotification->notification_page = $data["notification_page"];
$readNotification->notification_created = date("Y-m-d H:i:s");
$readNotification->notification_updated = date("Y-m-d H:i:s");

//checks newly added data if it already exists
isNameExist($readNotification, $readNotification->notification_name);

$query = checkCreate($readNotification);

returnSuccess($readNotification, "notification", $query);
