<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_banner = new WordpressBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateWordpress = $data['isUpdateWordpress'] ?? '';

if ($isUpdateWordpress == "wordpressBannerUpdate") {

    $wordpress_banner->wordpress_banner_title = $data["wordpress_banner_title"];
    $wordpress_banner->wordpress_banner_title_bold = $data["wordpress_banner_title_bold"];
    $wordpress_banner->wordpress_banner_description = $data["wordpress_banner_description"];
    $wordpress_banner->wordpress_banner_button_text = $data["wordpress_banner_button_text"];
    $wordpress_banner->wordpress_banner_img = $data["wordpress_banner_img"];
    $wordpress_banner->wordpress_banner_created = date("Y-m-d H:i:s");
    $wordpress_banner->wordpress_banner_datetime = date("Y-m-d H:i:s");


    $wordpress_banner_img_old = $data["wordpress_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $wordpress_banner->wordpress_banner_img = checkToUploadGoogleDrive(
        $wordpress_banner->wordpress_banner_img, // FILES
        $wordpress_banner_img_old, // OLD FILES
    );

    $query = checkCreate($wordpress_banner);
}

returnSuccess($wordpress_banner, "wordpress banner create", $query);
