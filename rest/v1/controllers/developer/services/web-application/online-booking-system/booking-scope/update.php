<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_scope = new BookingScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("booking_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $booking_scope->booking_scope_aid = $_GET['booking_scopeid'];
  $booking_scope->booking_scope_title = $data["booking_scope_title"];
  $booking_scope->booking_scope_desc = $data["booking_scope_desc"];
  $booking_scope->booking_scope_button_text = $data["booking_scope_button_text"];
  $booking_scope->booking_scope_img = $data["booking_scope_img"];
  $booking_scope->booking_scope_datetime = date("Y-m-d H:i:s");

  $booking_scope_img_old = $data["booking_scope_img_old"];

  checkId($booking_scope->booking_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $booking_scope->booking_scope_img = checkToUploadGoogleDrive(
    $booking_scope->booking_scope_img, // FILES
    $booking_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $booking_scope->booking_scope_img = checkDeleteGoogleDriveApiFiles(
    $booking_scope->booking_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($booking_scope);
  returnSuccess($booking_scope, "booking scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
