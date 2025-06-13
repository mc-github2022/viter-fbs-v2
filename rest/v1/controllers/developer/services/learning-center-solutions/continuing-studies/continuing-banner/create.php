<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_banner = new ContinuingBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContinuing = $data['isUpdateContinuing'] ?? '';

if ($isUpdateContinuing == "continuingBannerUpdate") {

    $continuing_banner->continuing_banner_title = $data["continuing_banner_title"];
    $continuing_banner->continuing_banner_title_bold = $data["continuing_banner_title_bold"];
    $continuing_banner->continuing_banner_description = $data["continuing_banner_description"];
    $continuing_banner->continuing_banner_button_text = $data["continuing_banner_button_text"];
    $continuing_banner->continuing_banner_button_link = $data["continuing_banner_button_link"];
    $continuing_banner->continuing_banner_img = $data["continuing_banner_img"];
    $continuing_banner->continuing_banner_created = date("Y-m-d H:i:s");
    $continuing_banner->continuing_banner_datetime = date("Y-m-d H:i:s");


    $continuing_banner_img_old = $data["continuing_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $continuing_banner->continuing_banner_img = checkToUploadGoogleDrive(
        $continuing_banner->continuing_banner_img, // FILES
        $continuing_banner_img_old, // OLD FILES
    );

    $query = checkCreate($continuing_banner);
}

returnSuccess($continuing_banner, "continuing banner create", $query);
