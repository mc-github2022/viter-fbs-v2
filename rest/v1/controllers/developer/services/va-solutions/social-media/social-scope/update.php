<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_scope = new SocialMediaScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("social_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $social_scope->social_scope_aid = $_GET['social_scopeid'];
  $social_scope->social_scope_title = $data["social_scope_title"];
  $social_scope->social_scope_desc = $data["social_scope_desc"];
  $social_scope->social_scope_button_text = $data["social_scope_button_text"];
  $social_scope->social_scope_img = $data["social_scope_img"];
  $social_scope->social_scope_datetime = date("Y-m-d H:i:s");

  $social_scope_img_old = $data["social_scope_img_old"];

  checkId($social_scope->social_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $social_scope->social_scope_img = checkToUploadGoogleDrive(
    $social_scope->social_scope_img, // FILES
    $social_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $social_scope->social_scope_img = checkDeleteGoogleDriveApiFiles(
    $social_scope->social_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($social_scope);
  returnSuccess($social_scope, "social scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
