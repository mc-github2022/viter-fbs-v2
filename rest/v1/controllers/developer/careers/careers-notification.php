<?php
// check database connection
require '../../../models/developer/sending-email/SendingEmail.php';
require '../../../core/header.php';
require '../../../core/Encryption.php';
require '../../../notification/careers-notification-message.php';
require '../../../core/functions.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$careerNotif = new SendingEmail($conn);
$response = new Response();
// get should not be present
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $name = checkIndex($data, "client_name");
    $email = checkIndex($data, "client_email");
    $jobTitle = checkIndex($data, "job_title");
    // Check email existence
    $emailReceiver = checkIndex($data, "client_email");

    if (empty($name) || empty($emailReceiver)) {
    returnError("Name and email are required.");
}

    // Validate email receiver
    if (($emailReceiver) == 0) {
        returnError("Something went wrong, Please try again later.");
    }

    if (($emailReceiver) > 0) {
        $mail = sendEmailCareersNotif(
            $name,
            $email,
            $jobTitle
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
