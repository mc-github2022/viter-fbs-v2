<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_scope = new SinglepageScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("singlepage_scopeid", $_GET)) {
  $singlepage_scope->singlepage_scope_aid = $_GET['singlepage_scopeid'];
  checkId($singlepage_scope->singlepage_scope_aid);
  $query = checkReadAll($singlepage_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($singlepage_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
