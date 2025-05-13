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
        $mailerLog->dateTo = $data["dateTo"];
        $mailerLog->dateFrom = $data["dateFrom"];


        // filter for search, status sent and all date (OKAY NA TO)
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" &&  $mailerLog->sending_email_log_search != "" && $filterValue == "sent") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterBySearchStatusAndAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter for search, status failed and all date (OKAY NA TO)
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" &&  $mailerLog->sending_email_log_search != "" && $filterValue == "failed") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterBySearchStatusAndAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter for search, audience and all date (OKAY NA TO)
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" &&  $mailerLog->sending_email_log_search != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterBySearchAudienceAndAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter status sent, date from, and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "sent" && $mailerLog->dateFrom != "") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatusDateFromSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter status failed, date from, and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "failed" && $mailerLog->dateFrom != "") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatusDateFromSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter audience, date from, and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateFrom != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterByAudienceDateFromSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter status sent, date to, and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "sent" && $mailerLog->dateTo != "") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatusDateToSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter status failed, date to, and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "failed" && $mailerLog->dateTo != "") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatusDateToSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter audience, date to, and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateTo != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterByAudienceDateToSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }


        // filter for status sent and all date (OKAY NA TO)
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" && $filterValue == "sent") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatusAndAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter for status failed and all date (OKAY NA TO)
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" && $filterValue == "failed") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatusAndAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter for audience and all date (OKAY NA TO)
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterByAudienceAndAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter for date if any of them has entry (OKAY NA TO)
        if ($mailerLog->dateFrom != "" || $mailerLog->dateTo != "") {
            $query = checkFilterBySingleDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }



        // filter search and date to
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateTo != "") {
            $query = checkFilterSearchAndDateTo($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter search and both date
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" && $mailerLog->sending_email_log_search != "") {
            $query = checkFilterBySearchAndAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }






        // filter status sent and date from (OKAY NA TO)
        if ($filterValue == "sent" && $mailerLog->dateFrom != "") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatusAndDateFrom($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter status failed and date from (OKAY NA TO)
        if ($filterValue == "failed" && $mailerLog->dateFrom != "") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatusAndDateFrom($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter audience and date from (OKAY NA TO)
        if ($mailerLog->dateFrom != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterByAudienceAndDateFrom($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }


        // filter status sent and date to (OKAY NA TO)
        if ($filterValue == "sent" && $mailerLog->dateTo != "") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatusAndDateTo($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter status failed and date to (OKAY NA TO)
        if ($filterValue == "failed" && $mailerLog->dateTo != "") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatusAndDateTo($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter audience and date to (OKAY NA TO)
        if ($mailerLog->dateTo != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterByAudienceAndDateTo($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }



        // filter by status sent and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "sent") {
            $mailerLog->sending_email_log_is_success = 1;
            $query = checkFilterByStatusSentOrFailedAndSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by status failed and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $filterValue == "failed") {
            $mailerLog->sending_email_log_is_success = 0;
            $query = checkFilterByStatusSentOrFailedAndSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }
        // filter by audience and search (OKAY NA TO)
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->sending_email_log_audience_id = $filterValue) {
            $query = checkFilterByAudienceAndSearch($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }


        // filter for date if both has entry
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "") {
            $query = checkFilterByAllDate($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // filter search and date from
        if ($mailerLog->dateFrom != "" && $mailerLog->sending_email_log_search != "") {
            $query = checkFilterSearchAndDateFrom($mailerLog);
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
