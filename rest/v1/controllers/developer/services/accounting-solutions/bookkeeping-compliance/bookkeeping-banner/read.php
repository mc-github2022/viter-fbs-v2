<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_banner = new BookkeepingBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("bookkeeping_bannerid", $_GET)) {
  $bookkeeping_banner->bookkeeping_banner_aid = $_GET['bookkeeping_bannerid'];
  checkId($bookkeeping_banner->bookkeeping_banner_aid);
  $query = checkReadAll($bookkeeping_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($bookkeeping_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
