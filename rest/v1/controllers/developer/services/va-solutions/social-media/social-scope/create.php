<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_scope = new SocialMediaScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$social_scope->social_scope_title = $data["social_scope_title"];
$social_scope->social_scope_desc = $data["social_scope_desc"];
$social_scope->social_scope_button_text = $data["social_scope_button_text"];
$social_scope->social_scope_img = $data["social_scope_img"];
$social_scope->social_scope_created = date("Y-m-d H:i:s");
$social_scope->social_scope_datetime = date("Y-m-d H:i:s");


$social_scope_img_old = $data["social_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$social_scope->social_scope_img = checkToUploadGoogleDrive(
    $social_scope->social_scope_img, // FILES
    $social_scope_img_old, // OLD FILES
);

$query = checkCreate($social_scope);


returnSuccess($social_scope, "social scope create", $query);
