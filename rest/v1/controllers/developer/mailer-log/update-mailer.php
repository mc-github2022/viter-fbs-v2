<?php

// set http header 
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/mailer-log/MailerLog.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$mailerLog = new MailerLog($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);

    // update mailer log
    $mailerLog->sending_email_log_aid = $data["sending_email_log_aid"];
    $mailerLog->sending_email_log_email = $data["sending_email_log_email"];
    $mailerLog->sending_email_log_datetime = date("Y-m-d H:i:s");

    $query = checkUpdateMailerLog($mailerLog);

    http_response_code(200);
    returnSuccess($mailerLog, "sending news letter", $query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
