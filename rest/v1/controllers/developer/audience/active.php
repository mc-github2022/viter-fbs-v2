<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/audience/Audience.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$audience = new Audience($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("audienceId", $_GET)) {
        // check data
        checkPayload($data);

        $audience->audience_aid = $_GET['audienceId'];
        $audience->audience_is_active = trim($data["isActive"]);
        $audience->audience_datetime = date("Y-m-d H:i:s");

        checkId($audience->audience_aid);

        $query = checkActive($audience);
        http_response_code(200);
        returnSuccess($audience, "audience", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
