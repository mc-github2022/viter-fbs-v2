<?php
// set http header 
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// require '../../../core/Encryption.php';
// use needed classes
require '../../../models/developer/subscribe/Subscribe.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$response = new Response();
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("subscriberkey", $_GET)) {
        checkPayload($data);

        $subscribe->subscriber_key = $_GET['subscriberkey'];
        $subscribe->subscriber_is_active = trim($data["isActive"]);;
        $subscribe->subscriber_feedback = $data["subscriber_feedback"];
        $subscribe->subscriber_datetime = date("Y-m-d H:i:s");
        // checkId($subscribe->subscriber_aid);


        $query = checkUpdateUnsubscribe($subscribe);
        returnSuccess($subscribe, "subscribe", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
