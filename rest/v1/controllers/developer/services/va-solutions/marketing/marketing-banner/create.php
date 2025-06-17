<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_banner = new MarketingBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateMarketing = $data['isUpdateMarketing'] ?? '';

if ($isUpdateMarketing == "marketingBannerUpdate") {

    $marketing_banner->marketing_banner_title = $data["marketing_banner_title"];
    $marketing_banner->marketing_banner_title_bold = $data["marketing_banner_title_bold"];
    $marketing_banner->marketing_banner_description = $data["marketing_banner_description"];
    $marketing_banner->marketing_banner_button_text = $data["marketing_banner_button_text"];
    $marketing_banner->marketing_banner_img = $data["marketing_banner_img"];
    $marketing_banner->marketing_banner_created = date("Y-m-d H:i:s");
    $marketing_banner->marketing_banner_datetime = date("Y-m-d H:i:s");


    $marketing_banner_img_old = $data["marketing_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $marketing_banner->marketing_banner_img = checkToUploadGoogleDrive(
        $marketing_banner->marketing_banner_img, // FILES
        $marketing_banner_img_old, // OLD FILES
    );

    $query = checkCreate($marketing_banner);
}

returnSuccess($marketing_banner, "marketing banner create", $query);
