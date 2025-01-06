<?php
// set http header 
require '../../../models/developer/subscribe/Subscribe.php';
require '../../../notification/subscriber-newsletter.php';
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
$response = new Response();
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $subscribe->subscriber_aid = $_GET['subscribeid'];
    $email = trim($data["subscriber_email"]);
    $newsletter = $data["newsletter"];
    $newsletterSubject = $data["newsletter_subject"];
    $subscribe->subscriber_key = $data["subscriber_key"];
    $unsubscribe_link = "/unsubscribe";

    // Check email existence
    $emailReceiver = getResultData($subscribe->readEmailNewsletter());
    $newEmailReceiver = [];

    // Validate email receiver
    if (count($emailReceiver) == 0) {
        returnError("Something went wrong, Please try again later.");
    }

    if (count($emailReceiver) > 0) {
        $mail = sendNewsletter(
            $unsubscribe_link,
            $newsletter,
            $newsletterSubject,
            $emailReceiver,
            $subscribe->subscriber_key
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
    // return 404 error if endpoint not available
    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
