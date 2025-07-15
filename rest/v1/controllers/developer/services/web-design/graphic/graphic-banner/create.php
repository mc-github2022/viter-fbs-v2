<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_banner = new GraphicBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateGraphic = $data['isUpdateGraphic'] ?? '';

if ($isUpdateGraphic == "graphicBannerUpdate") {

    $graphic_banner->graphic_banner_title = $data["graphic_banner_title"];
    $graphic_banner->graphic_banner_title_bold = $data["graphic_banner_title_bold"];
    $graphic_banner->graphic_banner_description = $data["graphic_banner_description"];
    $graphic_banner->graphic_banner_button_text = $data["graphic_banner_button_text"];
    $graphic_banner->graphic_banner_img = $data["graphic_banner_img"];
    $graphic_banner->graphic_banner_created = date("Y-m-d H:i:s");
    $graphic_banner->graphic_banner_datetime = date("Y-m-d H:i:s");


    $graphic_banner_img_old = $data["graphic_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $graphic_banner->graphic_banner_img = checkToUploadGoogleDrive(
        $graphic_banner->graphic_banner_img, // FILES
        $graphic_banner_img_old, // OLD FILES
    );

    $query = checkCreate($graphic_banner);
}

returnSuccess($graphic_banner, "graphic banner create", $query);
