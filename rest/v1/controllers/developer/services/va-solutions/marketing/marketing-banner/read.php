<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_banner = new MarketingBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("marketing_bannerid", $_GET)) {
  $marketing_banner->marketing_banner_aid = $_GET['marketing_bannerid'];
  checkId($marketing_banner->marketing_banner_aid);
  $query = checkReadAll($marketing_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($marketing_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
