<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_scope = new PayrollScope($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payroll_scopeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $payroll_scope->payroll_scope_aid = $_GET['payroll_scopeid'];
  $payroll_scope->payroll_scope_title = $data["payroll_scope_title"];
  $payroll_scope->payroll_scope_desc = $data["payroll_scope_desc"];
  $payroll_scope->payroll_scope_img = $data["payroll_scope_img"];
  $payroll_scope->payroll_scope_datetime = date("Y-m-d H:i:s");

  $payroll_scope_img_old = $data["payroll_scope_img_old"];

  checkId($payroll_scope->payroll_scope_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $payroll_scope->payroll_scope_img = checkToUploadGoogleDrive(
    $payroll_scope->payroll_scope_img, // FILES
    $payroll_scope_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $payroll_scope->payroll_scope_img = checkDeleteGoogleDriveApiFiles(
    $payroll_scope->payroll_scope_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($payroll_scope);
  returnSuccess($payroll_scope, "payroll scope update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
