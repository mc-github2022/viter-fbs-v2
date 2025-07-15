<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_scope = new GraphicScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$graphic_scope->graphic_scope_title = $data["graphic_scope_title"];
$graphic_scope->graphic_scope_desc = $data["graphic_scope_desc"];
$graphic_scope->graphic_scope_button_text = $data["graphic_scope_button_text"];
$graphic_scope->graphic_scope_img = $data["graphic_scope_img"];
$graphic_scope->graphic_scope_created = date("Y-m-d H:i:s");
$graphic_scope->graphic_scope_datetime = date("Y-m-d H:i:s");


$graphic_scope_img_old = $data["graphic_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$graphic_scope->graphic_scope_img = checkToUploadGoogleDrive(
    $graphic_scope->graphic_scope_img, // FILES
    $graphic_scope_img_old, // OLD FILES
);

$query = checkCreate($graphic_scope);


returnSuccess($graphic_scope, "graphic scope create", $query);
