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
        $mailerLog->sending_email_log_created = date($data['monthYear'] . '-01');
        $monthYear = $data["monthYear"] ?? null; // Check if monthYear exists

        // Handle combined filters first (dateFrom + dateTo + search + filterValue)
        if ($monthYear != "" && $mailerLog->sending_email_log_search != "") {
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterBySearchStatusAndDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterBySearchStatusAndDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterBySearchAudienceAndDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceAndDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }

        if ($mailerLog->sending_email_log_search != "" && $monthYear != "") {
            $query = checkFilterBySearchAndDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // Search only + filterValue
        if ($mailerLog->sending_email_log_search != "") {
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterByStatusSentOrFailedAndSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterByStatusSentOrFailedAndSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceAndSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }

        if ($monthYear != "" && $mailerLog->sending_email_log_search != "") {
            $query = checkFilterSearchAndDateFrom($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        if ($monthYear) {
            $mailerLog->sending_email_log_created = $monthYear . '-01';

            if ($filterValue === "all") {
                $query = checkFilterByDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterByStatusAndDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterByStatusAndDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceAndDateTo($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            // fallback for date-only filter
            $query = checkFilterByDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // No monthYear provided — filter by status or audience only
        if ($filterValue === "sent") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatus($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        if ($filterValue === "failed") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatus($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        if (is_numeric($filterValue)) {
            $mailerLog->sending_email_log_audience_id = $filterValue;
            $query = checkFilterByAudience($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
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
