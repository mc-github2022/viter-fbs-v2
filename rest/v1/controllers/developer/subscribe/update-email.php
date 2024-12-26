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
$response = new Response();
$error = [];
$returnData = [];
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("userkey", $_GET)) {
        // get data
        $subscribe->subscriber_key = $_GET['userkey'];
        $subscribe->subscriber_datetime = date("Y-m-d H:i:s");

        // check if email exist
        $readKey = $subscribe->readKeyChangeEmail();

        // check if reload or key empty 
        $newCount = 0;

        // update if first load
        if ($readKey->rowCount() > 0) {
            $row = $readKey->fetch(PDO::FETCH_ASSOC);
            extract($row);
            $subscribe->subscriber_email = $subscriber_email_new;
            // update
            $query = checkUpdateEmailForUser($subscribe);
            returnSuccess($subscribe, "System user", $query);
        }

        $returnData["count"] = $newCount;
        $returnData["success"] = true;
        $returnData["added"] = $newCount;
        $response->setData($returnData);
        $response->send();
        exit;
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
