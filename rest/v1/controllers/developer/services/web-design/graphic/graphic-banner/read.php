<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_banner = new GraphicBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("graphic_bannerid", $_GET)) {
  $graphic_banner->graphic_banner_aid = $_GET['graphic_bannerid'];
  checkId($graphic_banner->graphic_banner_aid);
  $query = checkReadAll($graphic_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($graphic_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
