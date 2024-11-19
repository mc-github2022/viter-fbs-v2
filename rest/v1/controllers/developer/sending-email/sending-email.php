<?php

require '../../../core/header.php';
require '../../../notification/contact-form-message.php';
require '../../../core/functions.php';

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$response = new Response();
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $title = $data["formTitle"];
    $fileName = $data["client_file"];
    $subject = $data["client_message_subject"];

    $name = checkIndex($data, "client_name");
    $email = checkIndex($data, "client_email");
    $mobileNumber = checkIndex($data, "client_phone");
    $message = checkIndex($data, "client_message");
    // $message = checkIndex($data, "client_message");

    // $emailReceiver = ["mktg@frontlinebusiness.com.ph","jhonny.dichoso@frontlinebusiness.com.ph"];
    if (str_contains($title, "Job")) {
        $emailReceiver = ["kennie.deriquito@frontlinebusiness.com.ph", "rhoda.beloso@frontlinebusiness.com.ph", "jhonny.dichoso@frontlinebusiness.com.ph"];
        // $emailReceiver = ["mark.bumagat@frontlinebusiness.com.ph"];
    } elseif (str_contains($title, "College OJT") || str_contains($title, "Work Immersion") || str_contains($title, "Continuing Study")) {
        $emailReceiver = ["herlyn.torres@frontlinebusiness.com.ph", "thea.consignado@frontlinebusiness.com.ph", "jhonny.dichoso@frontlinebusiness.com.ph"];
        // $emailReceiver = ["markbumagat87@gmail.com"];
    } else {
        $emailReceiver = ["jhonny.dichoso@frontlinebusiness.com.ph", "marketing@frontlinebusiness.com.ph"];
        // $emailReceiver = ["markbumagat87@gmail.com"];
    }


    $mail = sendEmail(
        $title,
        $name,
        $email,
        $subject,
        $mobileNumber,
        $message,
        $emailReceiver,
        $fileName
    );

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
