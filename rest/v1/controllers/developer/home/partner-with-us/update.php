<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partner_with_us = new HomePartnerWithUs($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("home_partner_with_usid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateHomePartnerWithUs = $data['isUpdateHomePartnerWithUs'];

  if ($isUpdateHomePartnerWithUs == "partnerWithUsUpdate") {

    $partner_with_us->partner_with_us_aid = $_GET['home_partner_with_usid'];
    $partner_with_us->partner_with_us_subtitle = $data["partner_with_us_subtitle"];
    $partner_with_us->partner_with_us_title = $data["partner_with_us_title"];
    $partner_with_us->partner_with_us_description = $data["partner_with_us_description"];
    $partner_with_us->partner_with_us_button_text = $data["partner_with_us_button_text"];
    $partner_with_us->partner_with_us_img = $data["partner_with_us_img"];
    $partner_with_us->partner_with_us_datetime = date("Y-m-d H:i:s");

    $partner_with_us_img_old = $data["partner_with_us_img_old"];

    checkId($partner_with_us->partner_with_us_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $partner_with_us->partner_with_us_img = checkToUploadGoogleDrive(
      $partner_with_us->partner_with_us_img, // FILES
      $partner_with_us_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $partner_with_us->partner_with_us_img = checkDeleteGoogleDriveApiFiles(
      $partner_with_us->partner_with_us_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($partner_with_us);
  }

  returnSuccess($partner_with_us, "partner with us", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
