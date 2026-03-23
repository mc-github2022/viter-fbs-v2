<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_banner = new BookingBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateBooking = $data['isUpdateBooking'] ?? '';

if ($isUpdateBooking == "bookingBannerUpdate") {

    $booking_banner->booking_banner_title = $data["booking_banner_title"];
    $booking_banner->booking_banner_title_bold = $data["booking_banner_title_bold"];
    $booking_banner->booking_banner_description = $data["booking_banner_description"];
    $booking_banner->booking_banner_button_text = $data["booking_banner_button_text"];
    $booking_banner->booking_banner_button_link = $data["booking_banner_button_link"];
    $booking_banner->booking_banner_img = $data["booking_banner_img"];
    $booking_banner->booking_banner_created = date("Y-m-d H:i:s");
    $booking_banner->booking_banner_datetime = date("Y-m-d H:i:s");


    $booking_banner_img_old = $data["booking_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $booking_banner->booking_banner_img = checkToUploadGoogleDrive(
        $booking_banner->booking_banner_img, // FILES
        $booking_banner_img_old, // OLD FILES
    );

    $query = checkCreate($booking_banner);
}

returnSuccess($booking_banner, "booking banner create", $query);
