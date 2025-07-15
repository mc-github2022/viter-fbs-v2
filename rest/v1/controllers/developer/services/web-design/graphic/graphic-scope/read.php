<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_scope = new GraphicScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("graphic_scopeid", $_GET)) {
  $graphic_scope->graphic_scope_aid = $_GET['graphic_scopeid'];
  checkId($graphic_scope->graphic_scope_aid);
  $query = checkReadAll($graphic_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($graphic_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
