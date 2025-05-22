<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_scope = new HrisScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("hris_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $hris_scope->hris_scope_aid = $_GET['hris_scopeid'];
  $hris_scope->hris_scope_title = $data["hris_scope_title"];
  $hris_scope->hris_scope_desc = $data["hris_scope_desc"];
  $hris_scope->hris_scope_img = $data["hris_scope_img"];
  $hris_scope->hris_scope_datetime = date("Y-m-d H:i:s");

  $hris_scope_img_old = $data["hris_scope_img_old"];

  checkId($hris_scope->hris_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $hris_scope->hris_scope_img = checkToUploadGoogleDrive(
    $hris_scope->hris_scope_img, // FILES
    $hris_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $hris_scope->hris_scope_img = checkDeleteGoogleDriveApiFiles(
    $hris_scope->hris_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($hris_scope);
  returnSuccess($hris_scope, "hris scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
