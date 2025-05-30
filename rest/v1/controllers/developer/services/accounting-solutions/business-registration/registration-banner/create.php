<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_banner = new RegistrationBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateRegistration = $data['isUpdateRegistration'] ?? '';

if ($isUpdateRegistration == "registrationBannerUpdate") {

    $registration_banner->registration_banner_title = $data["registration_banner_title"];
    $registration_banner->registration_banner_title_bold = $data["registration_banner_title_bold"];
    $registration_banner->registration_banner_description = $data["registration_banner_description"];
    $registration_banner->registration_banner_button_text = $data["registration_banner_button_text"];
    $registration_banner->registration_banner_img = $data["registration_banner_img"];
    $registration_banner->registration_banner_created = date("Y-m-d H:i:s");
    $registration_banner->registration_banner_datetime = date("Y-m-d H:i:s");


    $registration_banner_img_old = $data["registration_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $registration_banner->registration_banner_img = checkToUploadGoogleDrive(
        $registration_banner->registration_banner_img, // FILES
        $registration_banner_img_old, // OLD FILES
    );

    $query = checkCreate($registration_banner);
}

returnSuccess($registration_banner, "registration banner create", $query);
