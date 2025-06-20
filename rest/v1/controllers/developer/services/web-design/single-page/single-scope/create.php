<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_scope = new SinglepageScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$singlepage_scope->singlepage_scope_title = $data["singlepage_scope_title"];
$singlepage_scope->singlepage_scope_desc = $data["singlepage_scope_desc"];
$singlepage_scope->singlepage_scope_button_text = $data["singlepage_scope_button_text"];
$singlepage_scope->singlepage_scope_img = $data["singlepage_scope_img"];
$singlepage_scope->singlepage_scope_created = date("Y-m-d H:i:s");
$singlepage_scope->singlepage_scope_datetime = date("Y-m-d H:i:s");


$singlepage_scope_img_old = $data["singlepage_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$singlepage_scope->singlepage_scope_img = checkToUploadGoogleDrive(
    $singlepage_scope->singlepage_scope_img, // FILES
    $singlepage_scope_img_old, // OLD FILES
);

$query = checkCreate($singlepage_scope);


returnSuccess($singlepage_scope, "singlepage scope create", $query);
