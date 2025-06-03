<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_banner = new OjtBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateOjt = $data['isUpdateOjt'] ?? '';

if ($isUpdateOjt == "ojtBannerUpdate") {

    $ojt_banner->ojt_banner_title = $data["ojt_banner_title"];
    $ojt_banner->ojt_banner_title_bold = $data["ojt_banner_title_bold"];
    $ojt_banner->ojt_banner_description = $data["ojt_banner_description"];
    $ojt_banner->ojt_banner_button_text = $data["ojt_banner_button_text"];
    $ojt_banner->ojt_banner_button_link = $data["ojt_banner_button_link"];
    $ojt_banner->ojt_banner_img = $data["ojt_banner_img"];
    $ojt_banner->ojt_banner_created = date("Y-m-d H:i:s");
    $ojt_banner->ojt_banner_datetime = date("Y-m-d H:i:s");


    $ojt_banner_img_old = $data["ojt_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $ojt_banner->ojt_banner_img = checkToUploadGoogleDrive(
        $ojt_banner->ojt_banner_img, // FILES
        $ojt_banner_img_old, // OLD FILES
    );

    $query = checkCreate($ojt_banner);
}

returnSuccess($ojt_banner, "ojt banner create", $query);
