<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_scope = new SocialMediaScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("social_scopeid", $_GET)) {
  $social_scope->social_scope_aid = $_GET['social_scopeid'];
  checkId($social_scope->social_scope_aid);
  $query = checkReadAll($social_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($social_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
