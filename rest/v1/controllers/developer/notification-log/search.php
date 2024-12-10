<?php
// set http header 
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/notification-log/NotificationLog.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$NotificationLog = new NotificationLog($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    // get data
    $NotificationLog->notification_log_search = $data["searchValue"];

    //filtering
    if ($data["isFilter"]) {
        $NotificationLog->notification_log_purpose = $data["notification_log_purpose"];
        $NotificationLog->dateTo = $data["dateTo"];
        $NotificationLog->dateFrom = $data["dateFrom"];

        // filter for search, purpose and all date
        if ($NotificationLog->dateFrom != "" && $NotificationLog->dateTo != "" && $NotificationLog->notification_log_purpose != "" && $NotificationLog->notification_log_search != "") {
            $query = checkFilterBySearchPurposeAndAllDate($NotificationLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter for date if any of them has entry
        if ($NotificationLog->dateFrom != "" || $NotificationLog->dateTo != "") {
            $query = checkFilterBySingleDate($NotificationLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter for purpose and all date
        if ($NotificationLog->dateFrom != "" && $NotificationLog->dateTo != "" && $NotificationLog->notification_log_purpose != "") {
            $query = checkFilterByPurposeAndAllDate($NotificationLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter for date if both has entry
        if ($NotificationLog->dateFrom != "" && $NotificationLog->dateTo != "") {
            $query = checkFilterByAllDate($NotificationLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // purpose and search
        if ($NotificationLog->notification_log_search != "" && $NotificationLog->notification_log_purpose != "") {
            $query = checkSearchAndPurpose($NotificationLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // search by purpose only
        if ($NotificationLog->notification_log_purpose != "") {
            $query = checkFilterByPurpose($NotificationLog);
            http_response_code(200);
            getQueriedData($query);
        }
    }

    checkKeyword($NotificationLog->notification_log_search);
    $query = checkSearch($NotificationLog);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
