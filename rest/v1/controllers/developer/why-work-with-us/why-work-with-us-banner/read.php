<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_banner = new WorkBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("work_bannerid", $_GET)) {
  $work_banner->work_banner_aid = $_GET['work_bannerid'];
  checkId($work_banner->work_banner_aid);
  $query = checkReadAll($work_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($work_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
