<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$booking_overview = new BookingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("booking_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $bookingOverviewUpdate = $data['bookingOverviewUpdate'];

  if ($bookingOverviewUpdate == "bookingOverviewUpdateImg") {

    $booking_overview->booking_overview_aid = $_GET['booking_overviewid'];
    $booking_overview->booking_overview_subtitle = $data["booking_overview_subtitle"];
    $booking_overview->booking_overview_title = $data["booking_overview_title"];
    $booking_overview->booking_overview_button_text = $data["booking_overview_button_text"];
    $booking_overview->booking_overview_img = $data["booking_overview_img"];
    $booking_overview->booking_overview_datetime = date("Y-m-d H:i:s");

    $booking_overview_img_old = $data["booking_overview_img_old"];

    checkId($booking_overview->booking_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $booking_overview->booking_overview_img = checkToUploadGoogleDrive(
      $booking_overview->booking_overview_img, // FILES
      $booking_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $booking_overview->booking_overview_img = checkDeleteGoogleDriveApiFiles(
      $booking_overview->booking_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($booking_overview);
  }
  if ($bookingOverviewUpdate == "bookingOverviewListUpdate") {
    $booking_overview->booking_overview_aid = $_GET['booking_overviewid'];
    $booking_overview->booking_overview_list_title_a = $data["booking_overview_list_title_a"];
    $booking_overview->booking_overview_list_description_a = $data["booking_overview_list_description_a"];
    $booking_overview->booking_overview_list_title_b = $data["booking_overview_list_title_b"];
    $booking_overview->booking_overview_list_description_b = $data["booking_overview_list_description_b"];
    $booking_overview->booking_overview_list_title_c = $data["booking_overview_list_title_c"];
    $booking_overview->booking_overview_list_description_c = $data["booking_overview_list_description_c"];
    $booking_overview->booking_overview_datetime = date("Y-m-d H:i:s");

    checkId($booking_overview->booking_overview_aid);
    // update
    $query = checkUpdateOverviewList($booking_overview);
  }

  returnSuccess($booking_overview, "booking overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
