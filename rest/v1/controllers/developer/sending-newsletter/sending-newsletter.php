<?php
// set http header 
require '../../../models/developer/sending-newsletter/SendingNewsletter.php';
require '../../../notification/subscriber-newsletter.php';
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$sendingNewsletter = new SendingNewsletter($conn);
$response = new Response();
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $newsletter = checkIndex($data, "newsletter");
    $newsletterSubject = checkIndex($data, "newsletter_subject");
    $subscriberEmail = checkIndex($data, "subscriber_email");
    $subscriberKey = checkIndex($data, "subscriber_key");
    $audienceId = checkIndex($data, "subscriber_audience_id");
    $subscriberReplyTo = checkIndex($data, "audience_notification_email");

    $unsubscribe_link = "/unsubscribe";

    $mailerLogList = getResultData($sendingNewsletter->readEmailLog());


    $mail = sendNewsletter(
        $unsubscribe_link,
        $newsletter,
        $newsletterSubject,
        $subscriberEmail,
        $subscriberKey,
        $subscriberReplyTo
    );


    $successEmailList = [];

    if ($mail["mail_success"] == true) {

        for ($i = 0; $i < count($mailerLogList); $i++) {
            // // if mail is success
            // // update the success status
            if ($mailerLogList[$i]["sending_email_log_email"] == $mail["email"]) {
                $sendingNewsletter->sending_email_log_email = $mail["email"];
                $sendingNewsletter->sending_email_log_is_success = 1;
                checkUpdate($sendingNewsletter);

                array_push($successEmailList, array("email" => $mail["email"]));
            }
        }

        // array_push($successEmailList, array("email" => $mail["email"]));

        $returnData["data"] = $mail;
        $returnData["count"] = 0;
        $returnData["success"] = true;
        $returnData["emailList"] = $successEmailList;
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
