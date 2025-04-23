<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_banner = new HrisBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateHris = $data['isUpdateHris'] ?? '';

if ($isUpdateHris == "hrisBannerUpdate") {

    $hris_banner->hris_banner_title = $data["hris_banner_title"];
    $hris_banner->hris_banner_title_bold = $data["hris_banner_title_bold"];
    $hris_banner->hris_banner_description = $data["hris_banner_description"];
    $hris_banner->hris_banner_button_text = $data["hris_banner_button_text"];
    $hris_banner->hris_banner_button_link = $data["hris_banner_button_link"];
    $hris_banner->hris_banner_img = $data["hris_banner_img"];
    $hris_banner->hris_banner_created = date("Y-m-d H:i:s");
    $hris_banner->hris_banner_datetime = date("Y-m-d H:i:s");


    $hris_banner_img_old = $data["hris_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $hris_banner->hris_banner_img = checkToUploadGoogleDrive(
        $hris_banner->hris_banner_img, // FILES
        $hris_banner_img_old, // OLD FILES
    );

    $query = checkCreate($hris_banner);
}

returnSuccess($hris_banner, "hris banner create", $query);
