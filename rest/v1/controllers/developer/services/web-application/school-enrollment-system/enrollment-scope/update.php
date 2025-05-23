<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_scope = new EnrollmentScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("enrollment_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $enrollment_scope->enrollment_scope_aid = $_GET['enrollment_scopeid'];
  $enrollment_scope->enrollment_scope_title = $data["enrollment_scope_title"];
  $enrollment_scope->enrollment_scope_desc = $data["enrollment_scope_desc"];
  $enrollment_scope->enrollment_scope_button_text = $data["enrollment_scope_button_text"];
  $enrollment_scope->enrollment_scope_img = $data["enrollment_scope_img"];
  $enrollment_scope->enrollment_scope_datetime = date("Y-m-d H:i:s");

  $enrollment_scope_img_old = $data["enrollment_scope_img_old"];

  checkId($enrollment_scope->enrollment_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $enrollment_scope->enrollment_scope_img = checkToUploadGoogleDrive(
    $enrollment_scope->enrollment_scope_img, // FILES
    $enrollment_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $enrollment_scope->enrollment_scope_img = checkDeleteGoogleDriveApiFiles(
    $enrollment_scope->enrollment_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($enrollment_scope);
  returnSuccess($enrollment_scope, "enrollment scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
