<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$asset_scope = new AssetScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$asset_scope->asset_scope_title = $data["asset_scope_title"];
$asset_scope->asset_scope_desc = $data["asset_scope_desc"];
$asset_scope->asset_scope_button_text = $data["asset_scope_button_text"];
$asset_scope->asset_scope_img = $data["asset_scope_img"];
$asset_scope->asset_scope_created = date("Y-m-d H:i:s");
$asset_scope->asset_scope_datetime = date("Y-m-d H:i:s");


$asset_scope_img_old = $data["asset_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$asset_scope->asset_scope_img = checkToUploadGoogleDrive(
    $asset_scope->asset_scope_img, // FILES
    $asset_scope_img_old, // OLD FILES
);

$query = checkCreate($asset_scope);


returnSuccess($asset_scope, "asset scope create", $query);
