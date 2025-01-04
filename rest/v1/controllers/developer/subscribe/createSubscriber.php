<?php
// check database connection
require '../../../notification/subscriber-message.php';
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

    if (array_key_exists("subscribeid", $_GET)) {

        // check data
        checkPayload($data);
        // get data

        $email = checkIndex($data, "subscriber_email");
        $subscribe->subscriber_email = checkIndex($data, "subscriber_email");
        $subscribe->subscriber_key = $encrypt->doHash(rand());
        $unsubscribe_link = "/unsubscribe";
        // checks newly added data if it already exists
        isEmailExist($subscribe, $subscribe->subscriber_email);

        if (trim($email) != "") {
            $mail = sendEmailSubscriber(
                $unsubscribe_link,
                $email,
                $subscribe->subscriber_key
            );
        }

        if ($mail["mail_success"] == true) {
            $subscribe->subscriber_is_active = 1;
            $subscribe->subscriber_is_agree = 1;
            $subscribe->subscriber_created = date("Y-m-d H:i:s");
            $subscribe->subscriber_datetime = date("Y-m-d H:i:s");

            $query = checkCreateSubscriber($subscribe);

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
