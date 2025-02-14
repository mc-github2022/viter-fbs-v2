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
$MailerLog = new MailerLog($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $MailerLog->sending_email_log_start = $_GET['start'];
        $MailerLog->sending_email_log_total = 15;

        checkLimitId($MailerLog->sending_email_log_start, $MailerLog->sending_email_log_total);

        $query = checkReadAll($MailerLog);
        $total_result = checkReadAll($MailerLog);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $MailerLog->sending_email_log_total,
            $MailerLog->sending_email_log_start
        );

        // return 404 error if endpoint not available
        checkEndpoint();
    }
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
