<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_apply = new ContinuingApplyNow($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("continuing_applyid", $_GET)) {
  $continuing_apply->continuing_apply_aid = $_GET['continuing_applyid'];
  checkId($continuing_apply->continuing_apply_aid);
  $query = checkReadAll($continuing_apply);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($continuing_apply);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
