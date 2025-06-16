<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_banner = new BusinessBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateBusiness = $data['isUpdateBusiness'] ?? '';

if ($isUpdateBusiness == "businessBannerUpdate") {

    $business_banner->business_banner_title = $data["business_banner_title"];
    $business_banner->business_banner_title_bold = $data["business_banner_title_bold"];
    $business_banner->business_banner_description = $data["business_banner_description"];
    $business_banner->business_banner_button_text = $data["business_banner_button_text"];
    $business_banner->business_banner_img = $data["business_banner_img"];
    $business_banner->business_banner_created = date("Y-m-d H:i:s");
    $business_banner->business_banner_datetime = date("Y-m-d H:i:s");


    $business_banner_img_old = $data["business_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $business_banner->business_banner_img = checkToUploadGoogleDrive(
        $business_banner->business_banner_img, // FILES
        $business_banner_img_old, // OLD FILES
    );

    $query = checkCreate($business_banner);
}

returnSuccess($business_banner, "business banner create", $query);
