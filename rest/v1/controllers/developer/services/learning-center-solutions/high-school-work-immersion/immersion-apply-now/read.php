<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_apply = new ImmersionApplyNow($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("immersion_applyid", $_GET)) {
  $immersion_apply->immersion_apply_aid = $_GET['immersion_applyid'];
  checkId($immersion_apply->immersion_apply_aid);
  $query = checkReadAll($immersion_apply);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($immersion_apply);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
