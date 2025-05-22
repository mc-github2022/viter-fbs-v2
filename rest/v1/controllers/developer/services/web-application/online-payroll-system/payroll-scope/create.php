<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_scope = new PayrollScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$payroll_scope->payroll_scope_title = $data["payroll_scope_title"];
$payroll_scope->payroll_scope_desc = $data["payroll_scope_desc"];
$payroll_scope->payroll_scope_img = $data["payroll_scope_img"];
$payroll_scope->payroll_scope_created = date("Y-m-d H:i:s");
$payroll_scope->payroll_scope_datetime = date("Y-m-d H:i:s");


$payroll_scope_img_old = $data["payroll_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$payroll_scope->payroll_scope_img = checkToUploadGoogleDrive(
    $payroll_scope->payroll_scope_img, // FILES
    $payroll_scope_img_old, // OLD FILES
);

$query = checkCreate($payroll_scope);


returnSuccess($payroll_scope, "payroll scope create", $query);
