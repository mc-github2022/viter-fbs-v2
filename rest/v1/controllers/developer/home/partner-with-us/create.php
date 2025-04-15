<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partner_with_us = new HomePartnerWithUs($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateHomePartnerWithUs = $data['isUpdateHomePartnerWithUs'] ?? '';

if ($isUpdateHomePartnerWithUs == "partnerWithUsUpdate") {

    $partner_with_us->partner_with_us_subtitle = $data["partner_with_us_subtitle"];
    $partner_with_us->partner_with_us_title = $data["partner_with_us_title"];
    $partner_with_us->partner_with_us_description = $data["partner_with_us_description"];
    $partner_with_us->partner_with_us_button_text = $data["partner_with_us_button_text"];
    $partner_with_us->partner_with_us_img = $data["partner_with_us_img"];
    $partner_with_us->partner_with_us_created = date("Y-m-d H:i:s");
    $partner_with_us->partner_with_us_datetime = date("Y-m-d H:i:s");


    $partner_with_us_img_old = $data["partner_with_us_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $partner_with_us->partner_with_us_img = checkToUploadGoogleDrive(
        $partner_with_us->partner_with_us_img, // FILES
        $partner_with_us_img_old, // OLD FILES
    );

    $query = checkCreate($partner_with_us);
}

returnSuccess($partner_with_us, "partner with us", $query);
