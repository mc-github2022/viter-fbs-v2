<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_scope = new PaymentScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payment_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $payment_scope->payment_scope_aid = $_GET['payment_scopeid'];
  $payment_scope->payment_scope_title = $data["payment_scope_title"];
  $payment_scope->payment_scope_desc = $data["payment_scope_desc"];
  $payment_scope->payment_scope_button_text = $data["payment_scope_button_text"];
  $payment_scope->payment_scope_img = $data["payment_scope_img"];
  $payment_scope->payment_scope_datetime = date("Y-m-d H:i:s");

  $payment_scope_img_old = $data["payment_scope_img_old"];

  checkId($payment_scope->payment_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $payment_scope->payment_scope_img = checkToUploadGoogleDrive(
    $payment_scope->payment_scope_img, // FILES
    $payment_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $payment_scope->payment_scope_img = checkDeleteGoogleDriveApiFiles(
    $payment_scope->payment_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($payment_scope);
  returnSuccess($payment_scope, "payment scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
