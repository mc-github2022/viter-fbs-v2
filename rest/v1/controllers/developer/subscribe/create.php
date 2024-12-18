<?php
// check database connection
require '../../../notification/subscriber-message.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$response = new Response();
$returnData = [];

// check data
checkPayload($data);
// get data

$email = checkIndex($data, "subscriber_email");

$subscribe->subscriber_email = checkIndex($data, "subscriber_email");
// checks newly added data if it already exists
isEmailExist($subscribe, $subscribe->subscriber_email);

if (trim($email) != "") {
    $mail = sendEmailSubscriber(
        $email
    );
}

if ($mail["mail_success"] == true) {
    $subscribe->subscriber_is_active = 1;

    $subscribe->subscriber_created = date("Y-m-d H:i:s");
    $subscribe->subscriber_datetime = date("Y-m-d H:i:s");

    $query = checkCreate($subscribe);

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
