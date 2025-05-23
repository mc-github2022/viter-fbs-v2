<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_banner = new EnrollmentBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateEnrollment = $data['isUpdateEnrollment'] ?? '';

if ($isUpdateEnrollment == "enrollmentBannerUpdate") {

    $enrollment_banner->enrollment_banner_title = $data["enrollment_banner_title"];
    $enrollment_banner->enrollment_banner_title_bold = $data["enrollment_banner_title_bold"];
    $enrollment_banner->enrollment_banner_description = $data["enrollment_banner_description"];
    $enrollment_banner->enrollment_banner_button_text = $data["enrollment_banner_button_text"];
    $enrollment_banner->enrollment_banner_img = $data["enrollment_banner_img"];
    $enrollment_banner->enrollment_banner_created = date("Y-m-d H:i:s");
    $enrollment_banner->enrollment_banner_datetime = date("Y-m-d H:i:s");


    $enrollment_banner_img_old = $data["enrollment_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $enrollment_banner->enrollment_banner_img = checkToUploadGoogleDrive(
        $enrollment_banner->enrollment_banner_img, // FILES
        $enrollment_banner_img_old, // OLD FILES
    );

    $query = checkCreate($enrollment_banner);
}

returnSuccess($enrollment_banner, "enrollment banner create", $query);
