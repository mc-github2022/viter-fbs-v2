<?php
// check database connection
require '../../../models/developer/subscribe/Subscribe.php';
require '../../../core/header.php';
require '../../../core/Encryption.php';
require '../../../notification/subscriber-message.php';
require '../../../core/functions.php';
require 'functions.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$encrypt = new Encryption();
$body = file_get_contents("php://input");
$data = json_decode($body, true);
$response = new Response();
$returnData = [];


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("subscriberkey", $_GET)) {
        checkPayload($data);

        $subscribe->subscriber_key = $_GET['subscriberkey'];
        $email = checkIndex($data, "subscriber_email");
        $subscribe->subscriber_datetime = date("Y-m-d H:i:s");


        if (trim($email) != "") {
            $mail = sendEmailSubscriber(
                $unsubscribe_link,
                $email,
                $subscribe->subscriber_key
            );
        }

        if ($mail["mail_success"] == true) {
            $subscribe->subscriber_is_active = 1;

            $query = checkEmailResend($subscribe);

            $returnData["data"] = $mail;
            $returnData["count"] = 0;
            $returnData["success"] = true;
            $response->setData($returnData);
            $response->send();
            exit;
        } else {
            $returnData["data"] = $mail;
            $returnData["count"] = 0;
            $returnData["success"] = false;
            $response->setData($returnData);
            $response->send();
            exit;
        }
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
