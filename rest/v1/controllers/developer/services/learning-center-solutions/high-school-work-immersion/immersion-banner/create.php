<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_banner = new ImmersionBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateImmersion = $data['isUpdateImmersion'] ?? '';

if ($isUpdateImmersion == "immersionBannerUpdate") {

    $immersion_banner->immersion_banner_title = $data["immersion_banner_title"];
    $immersion_banner->immersion_banner_title_bold = $data["immersion_banner_title_bold"];
    $immersion_banner->immersion_banner_description = $data["immersion_banner_description"];
    $immersion_banner->immersion_banner_button_text = $data["immersion_banner_button_text"];
    $immersion_banner->immersion_banner_button_link = $data["immersion_banner_button_link"];
    $immersion_banner->immersion_banner_img = $data["immersion_banner_img"];
    $immersion_banner->immersion_banner_created = date("Y-m-d H:i:s");
    $immersion_banner->immersion_banner_datetime = date("Y-m-d H:i:s");


    $immersion_banner_img_old = $data["immersion_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $immersion_banner->immersion_banner_img = checkToUploadGoogleDrive(
        $immersion_banner->immersion_banner_img, // FILES
        $immersion_banner_img_old, // OLD FILES
    );

    $query = checkCreate($immersion_banner);
}

returnSuccess($immersion_banner, "immersion banner create", $query);
