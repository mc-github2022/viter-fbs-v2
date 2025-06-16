<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_banner = new AdministrativeBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateAdministrative = $data['isUpdateAdministrative'] ?? '';

if ($isUpdateAdministrative == "administrativeBannerUpdate") {

    $administrative_banner->administrative_banner_title = $data["administrative_banner_title"];
    $administrative_banner->administrative_banner_title_bold = $data["administrative_banner_title_bold"];
    $administrative_banner->administrative_banner_description = $data["administrative_banner_description"];
    $administrative_banner->administrative_banner_button_text = $data["administrative_banner_button_text"];
    $administrative_banner->administrative_banner_img = $data["administrative_banner_img"];
    $administrative_banner->administrative_banner_created = date("Y-m-d H:i:s");
    $administrative_banner->administrative_banner_datetime = date("Y-m-d H:i:s");


    $administrative_banner_img_old = $data["administrative_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $administrative_banner->administrative_banner_img = checkToUploadGoogleDrive(
        $administrative_banner->administrative_banner_img, // FILES
        $administrative_banner_img_old, // OLD FILES
    );

    $query = checkCreate($administrative_banner);
}

returnSuccess($administrative_banner, "administrative banner create", $query);
