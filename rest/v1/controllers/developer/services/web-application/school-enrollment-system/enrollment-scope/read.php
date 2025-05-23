<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_scope = new EnrollmentScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("enrollment_scopeid", $_GET)) {
  $enrollment_scope->enrollment_scope_aid = $_GET['enrollment_scopeid'];
  checkId($enrollment_scope->enrollment_scope_aid);
  $query = checkReadAll($enrollment_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($enrollment_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
