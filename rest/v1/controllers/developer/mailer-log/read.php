<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$MailerLog = new MailerLog($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("mailerId", $_GET)) {
  $MailerLog->sending_email_log_aid = $_GET['mailerId'];
  checkId($MailerLog->sending_email_log_aid);
  $query = checkReadAll($MailerLog);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($MailerLog);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
