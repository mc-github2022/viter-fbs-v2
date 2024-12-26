<?php
// set http header 
require '../../../models/developer/subscribe/Subscribe.php';
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$error = [];
$returnData = [];
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("subscriberkey", $_GET)) {
        checkPayload($data);

        $subscribe->subscriber_key = $_GET['subscriberkey'];
        $subscribe->subscriber_is_active = trim($data["isActive"]);
        $subscriber_feedback = $data["subscriber_feedback"];
        $subscribe->subscriber_datetime = date("Y-m-d H:i:s");


        // Process the feedback array into a string if it's an array
        $processedFeedback = [];
        if (is_array($subscriber_feedback)) {
            for ($i = 0; $i < count($subscriber_feedback); $i++) {
                array_push($processedFeedback, trim($subscriber_feedback[$i]));
            }
            $subscriber_feedback = implode(', ', $processedFeedback);
        }

        $subscribe->subscriber_feedback = $subscriber_feedback;

        $query = checkReadKey($subscribe);
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
