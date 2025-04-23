<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_banner = new HrisBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("hris_bannerid", $_GET)) {
  $hris_banner->hris_banner_aid = $_GET['hris_bannerid'];
  checkId($hris_banner->hris_banner_aid);
  $query = checkReadAll($hris_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($hris_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
