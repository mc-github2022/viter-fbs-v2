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
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $readNotification->notification_start = $_GET['start'];
        $readNotification->notification_total = 15;

        checkLimitId($readNotification->notification_start, $readNotification->notification_total);

        $query = checkReadLimit($readNotification);
        $total_result = checkReadAll($readNotification);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $readNotification->notification_total,
            $readNotification->notification_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
