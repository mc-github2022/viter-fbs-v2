<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_banner = new BookkeepingBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateBookkeeping = $data['isUpdateBookkeeping'] ?? '';

if ($isUpdateBookkeeping == "bookkeepingBannerUpdate") {

    $bookkeeping_banner->bookkeeping_banner_title = $data["bookkeeping_banner_title"];
    $bookkeeping_banner->bookkeeping_banner_title_bold = $data["bookkeeping_banner_title_bold"];
    $bookkeeping_banner->bookkeeping_banner_description = $data["bookkeeping_banner_description"];
    $bookkeeping_banner->bookkeeping_banner_button_text = $data["bookkeeping_banner_button_text"];
    $bookkeeping_banner->bookkeeping_banner_img = $data["bookkeeping_banner_img"];
    $bookkeeping_banner->bookkeeping_banner_created = date("Y-m-d H:i:s");
    $bookkeeping_banner->bookkeeping_banner_datetime = date("Y-m-d H:i:s");


    $bookkeeping_banner_img_old = $data["bookkeeping_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $bookkeeping_banner->bookkeeping_banner_img = checkToUploadGoogleDrive(
        $bookkeeping_banner->bookkeeping_banner_img, // FILES
        $bookkeeping_banner_img_old, // OLD FILES
    );

    $query = checkCreate($bookkeeping_banner);
}

returnSuccess($bookkeeping_banner, "bookkeeping banner create", $query);
