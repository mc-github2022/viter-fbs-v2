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

        // filterValue can be: "sent", "failed", "all", or an audience ID

        // Handle combined filters first (dateFrom + dateTo + search + filterValue)
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "" && $mailerLog->sending_email_log_search != "") {
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterBySearchStatusAndAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterBySearchStatusAndAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "all") {
                $query = checkFilterBySearchAndAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterBySearchAudienceAndAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }

        // Handle partial filters
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateFrom != "") {
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterByStatusDateFromSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterByStatusDateFromSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceDateFromSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }

        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateTo != "") {
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterByStatusDateToSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterByStatusDateToSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceDateToSearch($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }

        // If all dates are set but no search
        if ($mailerLog->dateFrom != "" && $mailerLog->dateTo != "") {
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterByStatusAndAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterByStatusAndAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if ($filterValue === "all") {
                $query = checkFilterByAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceAndAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }

            // If no filterValue, still return based on date range only
            if ($filterValue == "") {
                $query = checkFilterByAllDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }

        // Only filter by search + dateFrom or dateTo
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateFrom != "") {
            $query = checkFilterSearchAndDateFrom($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateTo != "") {
            $query = checkFilterSearchAndDateTo($mailerLog);
            http_response_code(200);
            getQueriedData($query);
        }

        // Filter by search + all date
        if ($mailerLog->sending_email_log_search != "" && $mailerLog->dateFrom != "" && $mailerLog->dateTo != "") {
            $query = checkFilterBySearchAndAllDate($mailerLog);
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

        // Only filter by dateFrom and status
        if ($mailerLog->dateFrom != "") {
            if ($filterValue === "all") {
                $query = checkFilterBySingleDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterByStatusAndDateFrom($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterByStatusAndDateFrom($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceAndDateFrom($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }
        // Only filter by dateTo and status 
        if ($mailerLog->dateTo != "") {
            if ($filterValue === "all") {
                $query = checkFilterBySingleDate($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
            if ($filterValue === "sent") {
                $mailerLog->sending_email_log_is_success = 1;
                $query = checkFilterByStatusAndDateTo($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
            if ($filterValue === "failed") {
                $mailerLog->sending_email_log_is_success = 0;
                $query = checkFilterByStatusAndDateTo($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
            if (is_numeric($filterValue)) {
                $mailerLog->sending_email_log_audience_id = $filterValue;
                $query = checkFilterByAudienceAndDateTo($mailerLog);
                http_response_code(200);
                getQueriedData($query);
            }
        }


        // Only filter by status
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

        // Only filter by audience
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
