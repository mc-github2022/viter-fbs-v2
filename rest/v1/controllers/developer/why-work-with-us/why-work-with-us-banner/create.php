<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_banner = new WorkBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateWork = $data['isUpdateWork'] ?? '';

if ($isUpdateWork == "workBannerUpdate") {

    $work_banner->work_banner_title = $data["work_banner_title"];
    $work_banner->work_banner_title_bold = $data["work_banner_title_bold"];
    $work_banner->work_banner_description = $data["work_banner_description"];
    $work_banner->work_banner_button_text = $data["work_banner_button_text"];
    $work_banner->work_banner_img = $data["work_banner_img"];
    $work_banner->work_banner_created = date("Y-m-d H:i:s");
    $work_banner->work_banner_datetime = date("Y-m-d H:i:s");


    $work_banner_img_old = $data["work_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $work_banner->work_banner_img = checkToUploadGoogleDrive(
        $work_banner->work_banner_img, // FILES
        $work_banner_img_old, // OLD FILES
    );

    $query = checkCreate($work_banner);
}

returnSuccess($work_banner, "work banner create", $query);
