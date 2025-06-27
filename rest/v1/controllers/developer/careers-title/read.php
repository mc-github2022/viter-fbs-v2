<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$careers_title = new CareersTitle($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("careers_titleid", $_GET)) {
  $careers_title->careers_title_aid = $_GET['careers_titleid'];
  checkId($careers_title->careers_title_aid);
  $query = checkReadAll($careers_title);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($careers_title);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
