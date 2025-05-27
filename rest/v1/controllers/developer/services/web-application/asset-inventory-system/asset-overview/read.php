<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_overview = new AssetOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("asset_overviewid", $_GET)) {
  $asset_overview->asset_overview_aid = $_GET['asset_overviewid'];
  checkId($asset_overview->asset_overview_aid);
  $query = checkReadAll($asset_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($asset_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
