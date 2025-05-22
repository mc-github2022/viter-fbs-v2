<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_scope = new HrisScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$hris_scope->hris_scope_title = $data["hris_scope_title"];
$hris_scope->hris_scope_desc = $data["hris_scope_desc"];
$hris_scope->hris_scope_img = $data["hris_scope_img"];
$hris_scope->hris_scope_created = date("Y-m-d H:i:s");
$hris_scope->hris_scope_datetime = date("Y-m-d H:i:s");


$hris_scope_img_old = $data["hris_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$hris_scope->hris_scope_img = checkToUploadGoogleDrive(
    $hris_scope->hris_scope_img, // FILES
    $hris_scope_img_old, // OLD FILES
);

$query = checkCreate($hris_scope);


returnSuccess($hris_scope, "hris scope create", $query);
