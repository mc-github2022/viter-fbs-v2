<?php
// check database connection

require '../../../models/developer/subscribe/Subscribe.php';
require '../../../core/header.php';
require '../../../core/Encryption.php';
require '../../../core/functions.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$encrypt = new Encryption();
$response = new Response();
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);
    // get data

    $email = checkIndex($data, "subscriber_email");
    $subscribe->subscriber_email = checkIndex($data, "subscriber_email");
    $subscribe->subscriber_audience_id = checkIndex($data, "subscriber_audience_id");
    $subscribe->subscriber_key = $encrypt->doHash(rand());

    // checks newly added data if it already exists
    isEmailExist($subscribe, $subscribe->subscriber_email);

    $subscribe->subscriber_is_active = 1;
    $subscribe->subscriber_is_agree = 1;
    $subscribe->subscriber_created = date("Y-m-d H:i:s");
    $subscribe->subscriber_datetime = date("Y-m-d H:i:s");

    $query = checkCreateSubscriber($subscribe);
    returnSuccess($subscribe, "subscribe", $query);
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
