<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_banner = new WebsiteBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateWebsite = $data['isUpdateWebsite'] ?? '';

if ($isUpdateWebsite == "websiteBannerUpdate") {

    $website_banner->website_banner_title = $data["website_banner_title"];
    $website_banner->website_banner_title_bold = $data["website_banner_title_bold"];
    $website_banner->website_banner_description = $data["website_banner_description"];
    $website_banner->website_banner_button_text = $data["website_banner_button_text"];
    $website_banner->website_banner_img = $data["website_banner_img"];
    $website_banner->website_banner_created = date("Y-m-d H:i:s");
    $website_banner->website_banner_datetime = date("Y-m-d H:i:s");


    $website_banner_img_old = $data["website_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $website_banner->website_banner_img = checkToUploadGoogleDrive(
        $website_banner->website_banner_img, // FILES
        $website_banner_img_old, // OLD FILES
    );

    $query = checkCreate($website_banner);
}

returnSuccess($website_banner, "website banner create", $query);
