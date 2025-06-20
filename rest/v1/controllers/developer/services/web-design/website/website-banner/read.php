<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_banner = new WebsiteBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("website_bannerid", $_GET)) {
  $website_banner->website_banner_aid = $_GET['website_bannerid'];
  checkId($website_banner->website_banner_aid);
  $query = checkReadAll($website_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($website_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
