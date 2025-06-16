<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_banner = new AdministrativeBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("administrative_bannerid", $_GET)) {
  $administrative_banner->administrative_banner_aid = $_GET['administrative_bannerid'];
  checkId($administrative_banner->administrative_banner_aid);
  $query = checkReadAll($administrative_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($administrative_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
