<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_scope = new WebsiteScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("website_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $website_scope->website_scope_aid = $_GET['website_scopeid'];
  $website_scope->website_scope_title = $data["website_scope_title"];
  $website_scope->website_scope_desc = $data["website_scope_desc"];
  $website_scope->website_scope_button_text = $data["website_scope_button_text"];
  $website_scope->website_scope_img = $data["website_scope_img"];
  $website_scope->website_scope_datetime = date("Y-m-d H:i:s");

  $website_scope_img_old = $data["website_scope_img_old"];

  checkId($website_scope->website_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $website_scope->website_scope_img = checkToUploadGoogleDrive(
    $website_scope->website_scope_img, // FILES
    $website_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $website_scope->website_scope_img = checkDeleteGoogleDriveApiFiles(
    $website_scope->website_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($website_scope);
  returnSuccess($website_scope, "website scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
