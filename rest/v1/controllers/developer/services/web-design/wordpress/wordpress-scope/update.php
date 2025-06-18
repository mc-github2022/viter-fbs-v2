<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_scope = new WordpressScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("wordpress_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $wordpress_scope->wordpress_scope_aid = $_GET['wordpress_scopeid'];
  $wordpress_scope->wordpress_scope_title = $data["wordpress_scope_title"];
  $wordpress_scope->wordpress_scope_desc = $data["wordpress_scope_desc"];
  $wordpress_scope->wordpress_scope_button_text = $data["wordpress_scope_button_text"];
  $wordpress_scope->wordpress_scope_img = $data["wordpress_scope_img"];
  $wordpress_scope->wordpress_scope_datetime = date("Y-m-d H:i:s");

  $wordpress_scope_img_old = $data["wordpress_scope_img_old"];

  checkId($wordpress_scope->wordpress_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $wordpress_scope->wordpress_scope_img = checkToUploadGoogleDrive(
    $wordpress_scope->wordpress_scope_img, // FILES
    $wordpress_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $wordpress_scope->wordpress_scope_img = checkDeleteGoogleDriveApiFiles(
    $wordpress_scope->wordpress_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($wordpress_scope);
  returnSuccess($wordpress_scope, "wordpress scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
