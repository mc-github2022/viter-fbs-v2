<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_scope = new BookingScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$booking_scope->booking_scope_title = $data["booking_scope_title"];
$booking_scope->booking_scope_desc = $data["booking_scope_desc"];
$booking_scope->booking_scope_button_text = $data["booking_scope_button_text"];
$booking_scope->booking_scope_img = $data["booking_scope_img"];
$booking_scope->booking_scope_created = date("Y-m-d H:i:s");
$booking_scope->booking_scope_datetime = date("Y-m-d H:i:s");


$booking_scope_img_old = $data["booking_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$booking_scope->booking_scope_img = checkToUploadGoogleDrive(
    $booking_scope->booking_scope_img, // FILES
    $booking_scope_img_old, // OLD FILES
);

$query = checkCreate($booking_scope);


returnSuccess($booking_scope, "booking scope create", $query);
