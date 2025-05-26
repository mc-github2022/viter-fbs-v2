<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_banner = new DonationBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateDonation = $data['isUpdateDonation'] ?? '';

if ($isUpdateDonation == "donationBannerUpdate") {

    $donation_banner->donation_banner_title = $data["donation_banner_title"];
    $donation_banner->donation_banner_title_bold = $data["donation_banner_title_bold"];
    $donation_banner->donation_banner_description = $data["donation_banner_description"];
    $donation_banner->donation_banner_button_text = $data["donation_banner_button_text"];
    $donation_banner->donation_banner_img = $data["donation_banner_img"];
    $donation_banner->donation_banner_created = date("Y-m-d H:i:s");
    $donation_banner->donation_banner_datetime = date("Y-m-d H:i:s");


    $donation_banner_img_old = $data["donation_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $donation_banner->donation_banner_img = checkToUploadGoogleDrive(
        $donation_banner->donation_banner_img, // FILES
        $donation_banner_img_old, // OLD FILES
    );

    $query = checkCreate($donation_banner);
}

returnSuccess($donation_banner, "donation banner create", $query);
