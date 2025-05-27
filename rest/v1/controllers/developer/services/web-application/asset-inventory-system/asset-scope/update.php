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
  // check data
  checkPayload($data);
  // get data

  $asset_scope->asset_scope_aid = $_GET['asset_scopeid'];
  $asset_scope->asset_scope_title = $data["asset_scope_title"];
  $asset_scope->asset_scope_desc = $data["asset_scope_desc"];
  $asset_scope->asset_scope_button_text = $data["asset_scope_button_text"];
  $asset_scope->asset_scope_img = $data["asset_scope_img"];
  $asset_scope->asset_scope_datetime = date("Y-m-d H:i:s");

  $asset_scope_img_old = $data["asset_scope_img_old"];

  checkId($asset_scope->asset_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $asset_scope->asset_scope_img = checkToUploadGoogleDrive(
    $asset_scope->asset_scope_img, // FILES
    $asset_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $asset_scope->asset_scope_img = checkDeleteGoogleDriveApiFiles(
    $asset_scope->asset_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($asset_scope);
  returnSuccess($asset_scope, "asset scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
