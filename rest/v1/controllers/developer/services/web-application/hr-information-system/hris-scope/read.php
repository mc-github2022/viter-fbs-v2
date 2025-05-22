<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_scope = new HrisScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("hris_scopeid", $_GET)) {
  $hris_scope->hris_scope_aid = $_GET['hris_scopeid'];
  checkId($hris_scope->hris_scope_aid);
  $query = checkReadAll($hris_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($hris_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
