<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_scope = new WordpressScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("wordpress_scopeid", $_GET)) {
  $wordpress_scope->wordpress_scope_aid = $_GET['wordpress_scopeid'];
  checkId($wordpress_scope->wordpress_scope_aid);
  $query = checkReadAll($wordpress_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($wordpress_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
