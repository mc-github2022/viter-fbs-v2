<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_scope = new GraphicScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("graphic_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $graphic_scope->graphic_scope_aid = $_GET['graphic_scopeid'];
  $graphic_scope->graphic_scope_title = $data["graphic_scope_title"];
  $graphic_scope->graphic_scope_desc = $data["graphic_scope_desc"];
  $graphic_scope->graphic_scope_button_text = $data["graphic_scope_button_text"];
  $graphic_scope->graphic_scope_img = $data["graphic_scope_img"];
  $graphic_scope->graphic_scope_datetime = date("Y-m-d H:i:s");

  $graphic_scope_img_old = $data["graphic_scope_img_old"];

  checkId($graphic_scope->graphic_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $graphic_scope->graphic_scope_img = checkToUploadGoogleDrive(
    $graphic_scope->graphic_scope_img, // FILES
    $graphic_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $graphic_scope->graphic_scope_img = checkDeleteGoogleDriveApiFiles(
    $graphic_scope->graphic_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($graphic_scope);
  returnSuccess($graphic_scope, "graphic scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
