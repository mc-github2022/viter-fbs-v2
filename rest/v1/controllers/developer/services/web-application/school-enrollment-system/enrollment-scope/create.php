<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_scope = new EnrollmentScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$enrollment_scope->enrollment_scope_title = $data["enrollment_scope_title"];
$enrollment_scope->enrollment_scope_desc = $data["enrollment_scope_desc"];
$enrollment_scope->enrollment_scope_button_text = $data["enrollment_scope_button_text"];
$enrollment_scope->enrollment_scope_img = $data["enrollment_scope_img"];
$enrollment_scope->enrollment_scope_created = date("Y-m-d H:i:s");
$enrollment_scope->enrollment_scope_datetime = date("Y-m-d H:i:s");


$enrollment_scope_img_old = $data["enrollment_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$enrollment_scope->enrollment_scope_img = checkToUploadGoogleDrive(
    $enrollment_scope->enrollment_scope_img, // FILES
    $enrollment_scope_img_old, // OLD FILES
);

$query = checkCreate($enrollment_scope);


returnSuccess($enrollment_scope, "enrollment scope create", $query);
