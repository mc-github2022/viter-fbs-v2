<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_banner = new EnrollmentBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("enrollment_bannerid", $_GET)) {
  $enrollment_banner->enrollment_banner_aid = $_GET['enrollment_bannerid'];
  checkId($enrollment_banner->enrollment_banner_aid);
  $query = checkReadAll($enrollment_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($enrollment_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
