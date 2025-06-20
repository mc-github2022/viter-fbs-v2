<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_scope = new SinglepageScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("singlepage_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $singlepage_scope->singlepage_scope_aid = $_GET['singlepage_scopeid'];
  $singlepage_scope->singlepage_scope_title = $data["singlepage_scope_title"];
  $singlepage_scope->singlepage_scope_desc = $data["singlepage_scope_desc"];
  $singlepage_scope->singlepage_scope_button_text = $data["singlepage_scope_button_text"];
  $singlepage_scope->singlepage_scope_img = $data["singlepage_scope_img"];
  $singlepage_scope->singlepage_scope_datetime = date("Y-m-d H:i:s");

  $singlepage_scope_img_old = $data["singlepage_scope_img_old"];

  checkId($singlepage_scope->singlepage_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $singlepage_scope->singlepage_scope_img = checkToUploadGoogleDrive(
    $singlepage_scope->singlepage_scope_img, // FILES
    $singlepage_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $singlepage_scope->singlepage_scope_img = checkDeleteGoogleDriveApiFiles(
    $singlepage_scope->singlepage_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($singlepage_scope);
  returnSuccess($singlepage_scope, "singlepage scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
