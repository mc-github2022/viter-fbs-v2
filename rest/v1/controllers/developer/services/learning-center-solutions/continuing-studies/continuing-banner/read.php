<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_banner = new ContinuingBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("continuing_bannerid", $_GET)) {
  $continuing_banner->continuing_banner_aid = $_GET['continuing_bannerid'];
  checkId($continuing_banner->continuing_banner_aid);
  $query = checkReadAll($continuing_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($continuing_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
