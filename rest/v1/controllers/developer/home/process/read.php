<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$process = new HomeProcess($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("home_processid", $_GET)) {
  $process->process_aid = $_GET['home_processid'];
  checkId($process->process_aid);
  $query = checkReadAll($process);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($process);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
