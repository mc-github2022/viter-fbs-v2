<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_banner = new SinglepageBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("singlepage_bannerid", $_GET)) {
  $singlepage_banner->singlepage_banner_aid = $_GET['singlepage_bannerid'];
  checkId($singlepage_banner->singlepage_banner_aid);
  $query = checkReadAll($singlepage_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($singlepage_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
