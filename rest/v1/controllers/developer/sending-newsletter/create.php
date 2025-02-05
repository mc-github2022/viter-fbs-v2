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
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);

    $recipientList = $data["recipientList"];

    // create mailer log
    // insert all email
    for ($i = 0; $i < $recipientList["count"]; $i++) {
        $sendingNewsletter->sending_email_log_audience_id = $recipientList["data"][$i]["subscriber_audience_id"];
        $sendingNewsletter->sending_email_log_email = $recipientList["data"][$i]["subscriber_email"];
        $sendingNewsletter->sending_email_log_created = date("Y-m-d H:i:s");
        $sendingNewsletter->sending_email_log_datetime = date("Y-m-d H:i:s");

        $query = checkCreate($sendingNewsletter);
    }

    http_response_code(200);
    returnSuccess($sendingNewsletter, "sending news letter", $query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
