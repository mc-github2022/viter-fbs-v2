<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_scope = new WebsiteScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("website_scopeid", $_GET)) {
  $website_scope->website_scope_aid = $_GET['website_scopeid'];
  checkId($website_scope->website_scope_aid);
  $query = checkReadAll($website_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($website_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
