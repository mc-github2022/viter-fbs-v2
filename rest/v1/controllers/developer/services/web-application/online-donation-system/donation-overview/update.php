<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$donation_overview = new DonationOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("donation_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $donationOverviewUpdate = $data['donationOverviewUpdate'];

  if ($donationOverviewUpdate == "donationOverviewUpdateImg") {

    $donation_overview->donation_overview_aid = $_GET['donation_overviewid'];
    $donation_overview->donation_overview_subtitle = $data["donation_overview_subtitle"];
    $donation_overview->donation_overview_title = $data["donation_overview_title"];
    $donation_overview->donation_overview_button_text = $data["donation_overview_button_text"];
    $donation_overview->donation_overview_img = $data["donation_overview_img"];
    $donation_overview->donation_overview_datetime = date("Y-m-d H:i:s");

    $donation_overview_img_old = $data["donation_overview_img_old"];

    checkId($donation_overview->donation_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $donation_overview->donation_overview_img = checkToUploadGoogleDrive(
      $donation_overview->donation_overview_img, // FILES
      $donation_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $donation_overview->donation_overview_img = checkDeleteGoogleDriveApiFiles(
      $donation_overview->donation_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($donation_overview);
  }
  if ($donationOverviewUpdate == "donationOverviewListUpdate") {
    $donation_overview->donation_overview_aid = $_GET['donation_overviewid'];
    $donation_overview->donation_overview_list_title_a = $data["donation_overview_list_title_a"];
    $donation_overview->donation_overview_list_description_a = $data["donation_overview_list_description_a"];
    $donation_overview->donation_overview_list_title_b = $data["donation_overview_list_title_b"];
    $donation_overview->donation_overview_list_description_b = $data["donation_overview_list_description_b"];
    $donation_overview->donation_overview_list_title_c = $data["donation_overview_list_title_c"];
    $donation_overview->donation_overview_list_description_c = $data["donation_overview_list_description_c"];
    $donation_overview->donation_overview_datetime = date("Y-m-d H:i:s");

    checkId($donation_overview->donation_overview_aid);
    // update
    $query = checkUpdateOverviewList($donation_overview);
  }

  returnSuccess($donation_overview, "donation overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
