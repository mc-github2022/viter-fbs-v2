<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$header = new Header($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateHeader = $data['isUpdateHeader'] ?? '';

// Set common fields
$header->header_created = date("Y-m-d H:i:s");
$header->header_datetime = date("Y-m-d H:i:s");


if ($isUpdateHeader == "headerUpdate") {
    $header->header_logo_img = $data["header_logo_img"];
    $header->header_home = $data["header_home"];
    $header->header_services = $data["header_services"];
    $header->header_whyfbs = $data["header_whyfbs"];
    $header->header_payment = $data["header_payment"];
    $header->header_payment_link = $data["header_payment_link"];
    $header->header_button_text = $data["header_button_text"];

    $header_logo_img_old = $data["header_logo_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $header->header_logo_img = checkToUploadGoogleDrive(
        $header->header_logo_img, // FILES
        $header_logo_img_old, // OLD FILES
    );

    $query = checkCreate($header);
}


// Return response
returnSuccess($header, "header create", $query);

// Return 404 error if endpoint not available
checkEndpoint();
