<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_scope = new DonationScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$donation_scope->donation_scope_title = $data["donation_scope_title"];
$donation_scope->donation_scope_desc = $data["donation_scope_desc"];
$donation_scope->donation_scope_button_text = $data["donation_scope_button_text"];
$donation_scope->donation_scope_img = $data["donation_scope_img"];
$donation_scope->donation_scope_created = date("Y-m-d H:i:s");
$donation_scope->donation_scope_datetime = date("Y-m-d H:i:s");


$donation_scope_img_old = $data["donation_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$donation_scope->donation_scope_img = checkToUploadGoogleDrive(
    $donation_scope->donation_scope_img, // FILES
    $donation_scope_img_old, // OLD FILES
);

$query = checkCreate($donation_scope);


returnSuccess($donation_scope, "donation scope create", $query);
