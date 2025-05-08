<?php
// set http header 
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/subscribe/Subscribe.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);

    // get data
    $subscribe->subscriber_search = $data["searchValue"];    // get data 
    $isFilter = $data["isFilter"];

    if ($isFilter) {
        $filterValue = $data["filterValue"];

        // filter by audience and search
        if ($subscribe->subscriber_search != "" && $subscribe->subscriber_audience_id = $filterValue) {
            $query = checkFilterByAudienceAndSearch($subscribe);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter by audience id
        $subscribe->subscriber_audience_id = $filterValue;
        $query = checkFilterByAudience($subscribe);
        http_response_code(200);
        getQueriedData($query);
    }
    // if search only
    checkKeyword($subscribe->subscriber_search);
    $query = checkSearch($subscribe);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
