<?php

require '../../../models/developer/sending-email/SendingEmail.php';
require '../../../core/header.php';
require '../../../notification/contact-form-message.php';
require '../../../core/functions.php';

// check database connection
$conn = null;
$conn = checkDbConnection();

$notif = new SendingEmail($conn);
$response = new Response();
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $fileName = $data["client_file"];
    $emailSubject = $data["email_subject"];
    $subject = $data["client_message_subject"];

    $name = checkIndex($data, "client_name");
    $email = checkIndex($data, "client_email");
    $mobileNumber = checkIndex($data, "client_phone");
    $message = checkIndex($data, "client_message");
    $notif->notification_purpose = $data["notification_purpose"];

    // check email is exist
    $emailReceiver = getResultData($notif->readEmailsByPurpose());

    // update if first load
    if (count($emailReceiver) == 0) {
        returnError("Something went wrong, Please try again later.");
    }

    if (count($emailReceiver) > 0) {
        $mail = sendEmail(
            $name,
            $email,
            $emailSubject,
            $subject,
            $mobileNumber,
            $message,
            $emailReceiver,
            $fileName
        );
    }

    $returnData["data"] = $mail;
    $returnData["count"] = 0;
    $returnData["success"] = true;
    $response->setData($returnData);
    $response->send();
    exit;
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
