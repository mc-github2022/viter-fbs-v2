<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_scope = new WebsiteScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$website_scope->website_scope_title = $data["website_scope_title"];
$website_scope->website_scope_desc = $data["website_scope_desc"];
$website_scope->website_scope_button_text = $data["website_scope_button_text"];
$website_scope->website_scope_img = $data["website_scope_img"];
$website_scope->website_scope_created = date("Y-m-d H:i:s");
$website_scope->website_scope_datetime = date("Y-m-d H:i:s");


$website_scope_img_old = $data["website_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$website_scope->website_scope_img = checkToUploadGoogleDrive(
    $website_scope->website_scope_img, // FILES
    $website_scope_img_old, // OLD FILES
);

$query = checkCreate($website_scope);


returnSuccess($website_scope, "website scope create", $query);
