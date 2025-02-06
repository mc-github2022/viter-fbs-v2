<?php
// set http header 
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/mailer-log/MailerLog.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$mailerLog = new MailerLog($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    // get data
    $mailerLog->sending_email_log_search = $data["searchValue"];
    $isFilter = $data["isFilter"];


    if ($isFilter) {
        $isFilterByStatus = $data["isFilterByStatus"];

        $mailerLog->sending_email_log_is_success = $data["sending_email_log_is_success"];
        $mailerLog->sending_email_log_audience_id = $data["sending_email_log_audience_id"];

        // if filter by status
        if ($isFilterByStatus) {
            $query = checkFilterByStatus($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter by audience id
        $query = checkFilterByAudience($mailerLog);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($mailerLog->sending_email_log_search);
    $query = checkSearch($mailerLog);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
