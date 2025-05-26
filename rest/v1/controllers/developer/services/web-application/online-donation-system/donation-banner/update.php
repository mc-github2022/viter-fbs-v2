<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_banner = new DonationBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("donation_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateDonation = $data['isUpdateDonation'];

  if ($isUpdateDonation == "donationBannerUpdate") {

    $donation_banner->donation_banner_aid = $_GET['donation_bannerid'];
    $donation_banner->donation_banner_title = $data["donation_banner_title"];
    $donation_banner->donation_banner_title_bold = $data["donation_banner_title_bold"];
    $donation_banner->donation_banner_description = $data["donation_banner_description"];
    $donation_banner->donation_banner_button_text = $data["donation_banner_button_text"];
    $donation_banner->donation_banner_img = $data["donation_banner_img"];
    $donation_banner->donation_banner_datetime = date("Y-m-d H:i:s");

    $donation_banner_img_old = $data["donation_banner_img_old"];

    checkId($donation_banner->donation_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $donation_banner->donation_banner_img = checkToUploadGoogleDrive(
      $donation_banner->donation_banner_img, // FILES
      $donation_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $donation_banner->donation_banner_img = checkDeleteGoogleDriveApiFiles(
      $donation_banner->donation_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($donation_banner);
  }

  returnSuccess($donation_banner, "donation banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
