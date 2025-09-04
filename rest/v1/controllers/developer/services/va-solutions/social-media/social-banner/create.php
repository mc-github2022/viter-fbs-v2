<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_banner = new SocialMediaBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateSocial = $data['isUpdateSocial'] ?? '';

if ($isUpdateSocial == "socialBannerUpdate") {

    $social_banner->social_banner_title = $data["social_banner_title"];
    $social_banner->social_banner_title_bold = $data["social_banner_title_bold"];
    $social_banner->social_banner_description = $data["social_banner_description"];
    $social_banner->social_banner_button_text = $data["social_banner_button_text"];
    $social_banner->social_banner_img = $data["social_banner_img"];
    $social_banner->social_banner_created = date("Y-m-d H:i:s");
    $social_banner->social_banner_datetime = date("Y-m-d H:i:s");


    $social_banner_img_old = $data["social_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $social_banner->social_banner_img = checkToUploadGoogleDrive(
        $social_banner->social_banner_img, // FILES
        $social_banner_img_old, // OLD FILES
    );

    $query = checkCreate($social_banner);
}

returnSuccess($social_banner, "social banner create", $query);
