<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../../models/developer/home/insights/Insights.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_insights = new Insights($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $home_insights->column_search = $data["searchValue"];    // get data
    if ($data["isFilter"] == true) {
        // get data
        // if filter with search
        if ($home_insights->column_search != "") {
            checkKeyword($home_insights->column_search);
            $home_insights->home_insights_is_active = checkIndex($data, "is_active");
            $query = checkFilterByStatusAndSearch($home_insights);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $home_insights->home_insights_is_active = checkIndex($data, "is_active");
        $query = checkFilterByStatus($home_insights);
        http_response_code(200);
        getQueriedData($query);
    }

    // if search only
    checkKeyword($home_insights->column_search);
    $query = checkSearch($home_insights);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
