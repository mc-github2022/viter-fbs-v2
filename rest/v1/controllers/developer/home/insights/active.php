<?php
// set http header
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/home/insights/Insights.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_insights = new Insights($conn);
$response = new Response();
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("home_insightsid", $_GET)) {
        // check data
        checkPayload($data);

        $home_insights->home_insights_aid = $_GET['home_insightsid'];
        $home_insights->home_insights_is_active = trim($data["isActive"]);
        $home_insights->home_insights_datetime = date("Y-m-d H:i:s");

        checkId($home_insights->home_insights_aid);
        $query = checkActive($home_insights);
        http_response_code(200);
        returnSuccess($home_insights, "insights", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
