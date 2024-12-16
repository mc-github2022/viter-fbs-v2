<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$subscribe = new Subscribe($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("careersid", $_GET)) {
  $subscribe->subscriber_aid = $_GET['subscribeid'];
  checkId($subscribe->subscriber_aid);
  $query = checkReadAll($subscribe);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($subscribe);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
