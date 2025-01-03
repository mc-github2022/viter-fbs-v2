<?php
// set http header 
require '../../../models/developer/subscribe/Subscribe.php';
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../core/Encryption.php';
require 'functions.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$encrypt = new Encryption();
$response = new Response();
$error = [];
$returnData = [];
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("subscribeid", $_GET)) {
        checkPayload($data);

        $subscribe->subscriber_aid = $_GET['subscribeid'];
        $subscribe->subscriber_is_active = trim($data["isActive"]);
        $subscribe->subscriber_datetime = date("Y-m-d H:i:s");
        $subscribe->subscriber_key = $encrypt->doHash(rand());


        checkId($subscribe->subscriber_aid);
        $query = checkCreateKeyRestore($subscribe);
        http_response_code(200);
        returnSuccess($subscribe, "subscribe", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
