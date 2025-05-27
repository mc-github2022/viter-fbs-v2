<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_banner = new AssetBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("asset_bannerid", $_GET)) {
  $asset_banner->asset_banner_aid = $_GET['asset_bannerid'];
  checkId($asset_banner->asset_banner_aid);
  $query = checkReadAll($asset_banner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($asset_banner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
