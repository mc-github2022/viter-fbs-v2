<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_banner = new ImmersionBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("immersion_bannerid", $_GET)) {
  $immersion_banner->immersion_banner_aid = $_GET['immersion_bannerid'];
  checkId($immersion_banner->immersion_banner_aid);
  $query = checkReadAll($immersion_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($immersion_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
