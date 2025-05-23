<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_overview = new EnrollmentOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("enrollment_overviewid", $_GET)) {
  $enrollment_overview->enrollment_overview_aid = $_GET['enrollment_overviewid'];
  checkId($enrollment_overview->enrollment_overview_aid);
  $query = checkReadAll($enrollment_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($enrollment_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
