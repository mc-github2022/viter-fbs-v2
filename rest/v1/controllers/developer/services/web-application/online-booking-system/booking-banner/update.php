<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_banner = new BookingBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("booking_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateBooking = $data['isUpdateBooking'];

  if ($isUpdateBooking == "bookingBannerUpdate") {

    $booking_banner->booking_banner_aid = $_GET['booking_bannerid'];
    $booking_banner->booking_banner_title = $data["booking_banner_title"];
    $booking_banner->booking_banner_title_bold = $data["booking_banner_title_bold"];
    $booking_banner->booking_banner_description = $data["booking_banner_description"];
    $booking_banner->booking_banner_button_text = $data["booking_banner_button_text"];
    $booking_banner->booking_banner_button_link = $data["booking_banner_button_link"];
    $booking_banner->booking_banner_img = $data["booking_banner_img"];
    $booking_banner->booking_banner_datetime = date("Y-m-d H:i:s");

    $booking_banner_img_old = $data["booking_banner_img_old"];

    checkId($booking_banner->booking_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $booking_banner->booking_banner_img = checkToUploadGoogleDrive(
      $booking_banner->booking_banner_img, // FILES
      $booking_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $booking_banner->booking_banner_img = checkDeleteGoogleDriveApiFiles(
      $booking_banner->booking_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($booking_banner);
  }

  returnSuccess($booking_banner, "booking banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
