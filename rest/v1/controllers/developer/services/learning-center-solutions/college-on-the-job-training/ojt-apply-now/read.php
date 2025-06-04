<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_apply = new OjtApplyNow($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("ojt_applyid", $_GET)) {
  $ojt_apply->ojt_apply_aid = $_GET['home_ojt_applyid'];
  checkId($ojt_apply->ojt_apply_aid);
  $query = checkReadAll($ojt_apply);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($ojt_apply);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
