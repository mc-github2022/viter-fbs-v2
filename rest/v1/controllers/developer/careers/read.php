<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$careers = new Careers($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("careersid", $_GET)) {
  $careers->careers_aid = $_GET['careersid'];
  checkId($careers->careers_aid);
  $query = checkReadAll($careers);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($careers);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
