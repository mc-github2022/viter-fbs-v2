<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_overview = new MarketingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("marketing_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $marketingOverviewUpdate = $data['marketingOverviewUpdate'];

  if ($marketingOverviewUpdate == "marketingOverviewUpdateImg") {

    $marketing_overview->marketing_overview_aid = $_GET['marketing_overviewid'];
    $marketing_overview->marketing_overview_subtitle = $data["marketing_overview_subtitle"];
    $marketing_overview->marketing_overview_title = $data["marketing_overview_title"];
    $marketing_overview->marketing_overview_img = $data["marketing_overview_img"];
    $marketing_overview->marketing_overview_datetime = date("Y-m-d H:i:s");

    $marketing_overview_img_old = $data["marketing_overview_img_old"];

    checkId($marketing_overview->marketing_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $marketing_overview->marketing_overview_img = checkToUploadGoogleDrive(
      $marketing_overview->marketing_overview_img, // FILES
      $marketing_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $marketing_overview->marketing_overview_img = checkDeleteGoogleDriveApiFiles(
      $marketing_overview->marketing_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($marketing_overview);
  }
  if ($marketingOverviewUpdate == "marketingOverviewListUpdate") {
    $marketing_overview->marketing_overview_aid = $_GET['marketing_overviewid'];
    $marketing_overview->marketing_overview_list_title_a = $data["marketing_overview_list_title_a"];
    $marketing_overview->marketing_overview_list_description_a = $data["marketing_overview_list_description_a"];
    $marketing_overview->marketing_overview_list_title_b = $data["marketing_overview_list_title_b"];
    $marketing_overview->marketing_overview_list_description_b = $data["marketing_overview_list_description_b"];
    $marketing_overview->marketing_overview_list_title_c = $data["marketing_overview_list_title_c"];
    $marketing_overview->marketing_overview_list_description_c = $data["marketing_overview_list_description_c"];
    $marketing_overview->marketing_overview_datetime = date("Y-m-d H:i:s");

    checkId($marketing_overview->marketing_overview_aid);
    // update
    $query = checkUpdateOverviewList($marketing_overview);
  }

  returnSuccess($marketing_overview, "marketing overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
