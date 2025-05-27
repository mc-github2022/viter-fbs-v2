<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/developer/newsletter/Newsletter.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$newsletter = new Newsletter($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("newsletterId", $_GET)) {
        // check data
        checkPayload($data);

        $newsletter->newsletter_aid = $_GET['newsletterId'];
        $newsletter->newsletter_is_active = trim($data["isActive"]);
        $newsletter->newsletter_datetime = date("Y-m-d H:i:s");

        checkId($newsletter->newsletter_aid);

        $query = checkActive($newsletter);
        http_response_code(200);
        returnSuccess($newsletter, "newsletter", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
