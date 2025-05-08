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

    if (array_key_exists("mailerId", $_GET)) {

        checkPayload($data);

        // update mailer log
        $mailerLog->sending_email_log_aid = $_GET['mailerId'];
        $mailerLog->sending_email_log_subject = $data["sending_email_log_subject"];
        $mailerLog->sending_email_log_content = $data["sending_email_log_content"];
        $mailerLog->sending_email_log_datetime = date("Y-m-d H:i:s");

        $query = checkUpdateMailerSubjectAndContent($mailerLog);


        returnSuccess($mailerLog, "sending news letter", $query);
        // return 404 error if endpoint not available
    }
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
