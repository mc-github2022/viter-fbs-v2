<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_scope = new PaymentScope($conn);
// get should not be present

// check data
checkPayload($data);
// get data


$payment_scope->payment_scope_title = $data["payment_scope_title"];
$payment_scope->payment_scope_desc = $data["payment_scope_desc"];
$payment_scope->payment_scope_button_text = $data["payment_scope_button_text"];
$payment_scope->payment_scope_img = $data["payment_scope_img"];
$payment_scope->payment_scope_created = date("Y-m-d H:i:s");
$payment_scope->payment_scope_datetime = date("Y-m-d H:i:s");


$payment_scope_img_old = $data["payment_scope_img_old"];

// UPLOAD FILE TO GOOGLE DRIVE  
$payment_scope->payment_scope_img = checkToUploadGoogleDrive(
    $payment_scope->payment_scope_img, // FILES
    $payment_scope_img_old, // OLD FILES
);

$query = checkCreate($payment_scope);


returnSuccess($payment_scope, "payment scope create", $query);
