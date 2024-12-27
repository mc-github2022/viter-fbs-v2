<?php
// check database connection
require '../../../notification/subscriber-message.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$encrypt = new Encryption();
$response = new Response();
$returnData = [];

if (array_key_exists("subscribeid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data

$email = checkIndex($data, "subscriber_email");
$subscribe->subscriber_email = checkIndex($data, "subscriber_email");
$subscribe->subscriber_terms_agreement = checkIndex($data, "subscriber_terms_agreement");
$subscribe->subscriber_key = $encrypt->doHash(rand());
$unsubscribe_link = "/unsubscribe";
// checks newly added data if it already exists


// // Assuming $subscribe is an instance of your subscriber class
// if (checkEmailSetActive($subscribe)) {
//     $returnData["message"] = "Email status updated to active.";
// } else {
//     $returnData["message"] = "Email is already active or does not exist.";
// }

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
