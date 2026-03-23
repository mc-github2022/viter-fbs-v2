<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$title = new BookingTitles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("booking_titlesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateBookingTitle = $data['isUpdateBookingTitle'];


  if ($isUpdateBookingTitle == "scopeTitleUpdate") {
    $title->booking_titles_aid = $_GET['booking_titlesid'];
    $title->booking_titles_overview_subtitle = $data["booking_titles_overview_subtitle"];
    $title->booking_titles_overview_title = $data["booking_titles_overview_title"];

    $title->booking_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->booking_titles_aid);

    // update
    $query = checkUpdate($title);
  }
  if ($isUpdateBookingTitle == "packagesTitleUpdate") {
    $title->booking_titles_aid = $_GET['booking_titlesid'];
    $title->booking_titles_packages_subtitle = $data["booking_titles_packages_subtitle"];
    $title->booking_titles_packages_title = $data["booking_titles_packages_title"];

    $title->booking_titles_datetime = date("Y-m-d H:i:s");
    checkId($title->booking_titles_aid);
    // update
    $query = checkUpdatePackagesTitle($title);
  }


  returnSuccess($title, "asset titles update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
