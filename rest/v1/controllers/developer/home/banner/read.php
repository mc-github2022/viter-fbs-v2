<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_banner = new Banner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("home_bannerid", $_GET)) {
  $home_banner->home_banner_aid = $_GET['home_bannerid'];
  checkId($home_banner->home_banner_aid);
  $query = checkReadAll($home_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($home_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
