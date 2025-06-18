<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_scope = new WordpressScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$wordpress_scope->wordpress_scope_title = $data["wordpress_scope_title"];
$wordpress_scope->wordpress_scope_desc = $data["wordpress_scope_desc"];
$wordpress_scope->wordpress_scope_button_text = $data["wordpress_scope_button_text"];
$wordpress_scope->wordpress_scope_img = $data["wordpress_scope_img"];
$wordpress_scope->wordpress_scope_created = date("Y-m-d H:i:s");
$wordpress_scope->wordpress_scope_datetime = date("Y-m-d H:i:s");


$wordpress_scope_img_old = $data["wordpress_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$wordpress_scope->wordpress_scope_img = checkToUploadGoogleDrive(
    $wordpress_scope->wordpress_scope_img, // FILES
    $wordpress_scope_img_old, // OLD FILES
);

$query = checkCreate($wordpress_scope);


returnSuccess($wordpress_scope, "wordpress scope create", $query);
