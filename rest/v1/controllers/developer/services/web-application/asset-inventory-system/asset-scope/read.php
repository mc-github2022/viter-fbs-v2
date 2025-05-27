<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_scope = new AssetScope($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("asset_scopeid", $_GET)) {
  $asset_scope->asset_scope_aid = $_GET['asset_scopeid'];
  checkId($asset_scope->asset_scope_aid);
  $query = checkReadAll($asset_scope);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($asset_scope);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
