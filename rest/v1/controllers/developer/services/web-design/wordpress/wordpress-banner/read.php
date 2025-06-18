<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_banner = new WordpressBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("wordpress_bannerid", $_GET)) {
  $wordpress_banner->wordpress_banner_aid = $_GET['wordpress_bannerid'];
  checkId($wordpress_banner->wordpress_banner_aid);
  $query = checkReadAll($wordpress_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($wordpress_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
