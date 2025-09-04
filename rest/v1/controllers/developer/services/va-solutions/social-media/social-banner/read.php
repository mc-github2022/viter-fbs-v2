<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_banner = new SocialMediaBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("social_bannerid", $_GET)) {
  $social_banner->social_banner_aid = $_GET['social_bannerid'];
  checkId($social_banner->social_banner_aid);
  $query = checkReadAll($social_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($social_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
