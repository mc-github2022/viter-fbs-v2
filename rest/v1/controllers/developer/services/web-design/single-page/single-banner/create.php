<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_banner = new SinglepageBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateSinglepage = $data['isUpdateSinglepage'] ?? '';

if ($isUpdateSinglepage == "singlepageBannerUpdate") {

    $singlepage_banner->singlepage_banner_title = $data["singlepage_banner_title"];
    $singlepage_banner->singlepage_banner_title_bold = $data["singlepage_banner_title_bold"];
    $singlepage_banner->singlepage_banner_description = $data["singlepage_banner_description"];
    $singlepage_banner->singlepage_banner_button_text = $data["singlepage_banner_button_text"];
    $singlepage_banner->singlepage_banner_img = $data["singlepage_banner_img"];
    $singlepage_banner->singlepage_banner_created = date("Y-m-d H:i:s");
    $singlepage_banner->singlepage_banner_datetime = date("Y-m-d H:i:s");


    $singlepage_banner_img_old = $data["singlepage_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $singlepage_banner->singlepage_banner_img = checkToUploadGoogleDrive(
        $singlepage_banner->singlepage_banner_img, // FILES
        $singlepage_banner_img_old, // OLD FILES
    );

    $query = checkCreate($singlepage_banner);
}

returnSuccess($singlepage_banner, "singlepage banner create", $query);
