<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_scope = new DonationScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("donation_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $donation_scope->donation_scope_aid = $_GET['donation_scopeid'];
  $donation_scope->donation_scope_title = $data["donation_scope_title"];
  $donation_scope->donation_scope_desc = $data["donation_scope_desc"];
  $donation_scope->donation_scope_button_text = $data["donation_scope_button_text"];
  $donation_scope->donation_scope_img = $data["donation_scope_img"];
  $donation_scope->donation_scope_datetime = date("Y-m-d H:i:s");

  $donation_scope_img_old = $data["donation_scope_img_old"];

  checkId($donation_scope->donation_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $donation_scope->donation_scope_img = checkToUploadGoogleDrive(
    $donation_scope->donation_scope_img, // FILES
    $donation_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $donation_scope->donation_scope_img = checkDeleteGoogleDriveApiFiles(
    $donation_scope->donation_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($donation_scope);
  returnSuccess($donation_scope, "donation scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
