<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$audience = new Audience($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("audienceId", $_GET)) {
  $audience->audience_aid = $_GET['audienceId'];
  checkId($audience->audience_aid);
  $query = checkReadAll($audience);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($audience);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
