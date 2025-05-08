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
        $filterValue = $data["filterValue"];

        // filter by status sent and search 
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "sent") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatusSentOrFailedAndSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by status failed and search 
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "failed") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatusSentOrFailedAndSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by audience and search
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterByAudienceAndSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // if filter by status send
        if ($filterValue == "sent") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatus($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // if filter by status failed
        if ($filterValue == "failed") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatus($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // if filter by audience id
        $mailerLog->sending_email_log_audience_id = $filterValue;
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
