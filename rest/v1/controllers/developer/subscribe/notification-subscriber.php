<?php
// check database connection
require '../../../models/developer/subscribe/Subscribe.php';
require '../../../core/header.php';
require '../../../notification/subscriber-notification-message.php';
require '../../../core/functions.php';
require 'functions.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$response = new Response();
// get should not be present
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);


    $email = checkIndex($data, "subscriber_email");
    $subscribe->notification_purpose = $data["notification_purpose"];
    $emailDate = (new DateTime())->format("F j, Y");

    // subscriber count
    $subscriberCount = checkReadSubscriberCount($subscribe);


    $subscribe->subscriber_email = checkIndex($data, "subscriber_email");
    // checks newly added data if it already exists
    isEmailExist($subscribe, $subscribe->subscriber_email);

    // Check email existence
    $emailReceiver = getResultData($subscribe->readEmailsByPurpose());


    // Validate email receiver
    if (count($emailReceiver) == 0) {
        returnError("Something went wrong, Please try again later.");
    }

    // Check email existence
    if (isEmailExist($subscribe, $subscribe->subscriber_email)) {
        returnError("This email is already subscribed.");
    }

    if (count($emailReceiver) > 0) {
        $mail = sendNotificationEmailSubscriber(
            $email,
            $emailReceiver,
            $emailDate,
            $subscriberCount
        );
    }

    if ($mail["mail_success"] == true) {
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

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
