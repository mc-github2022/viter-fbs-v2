<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/notification/Notification.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$readNotification = new Notification($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("notificationId", $_GET)) {
        // check data
        checkPayload($data);

        $readNotification->notification_aid = $_GET['notificationId'];
        $readNotification->notification_is_active = trim($data["isActive"]);
        $readNotification->notification_updated = date("Y-m-d H:i:s");

        checkId($readNotification->notification_aid);

        $query = checkActive($readNotification);
        http_response_code(200);
        returnSuccess($readNotification, "Notification", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
