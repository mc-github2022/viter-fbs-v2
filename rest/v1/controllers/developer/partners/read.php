<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partners = new Partners($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("partnersid", $_GET)) {
  $partners->partners_aid = $_GET['partnersid'];
  checkId($partners->partners_aid);
  $query = checkReadAll($partners);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($partners);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
