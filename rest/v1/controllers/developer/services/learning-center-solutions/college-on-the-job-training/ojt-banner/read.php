<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_banner = new OjtBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("ojt_bannerid", $_GET)) {
  $ojt_banner->ojt_banner_aid = $_GET['ojt_bannerid'];
  checkId($ojt_banner->ojt_banner_aid);
  $query = checkReadAll($ojt_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($ojt_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
