<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_overview = new BusinessOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("business_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $businessOverviewUpdate = $data['businessOverviewUpdate'];

  if ($businessOverviewUpdate == "businessOverviewUpdateImg") {

    $business_overview->business_overview_aid = $_GET['business_overviewid'];
    $business_overview->business_overview_subtitle = $data["business_overview_subtitle"];
    $business_overview->business_overview_title = $data["business_overview_title"];
    $business_overview->business_overview_img = $data["business_overview_img"];
    $business_overview->business_overview_datetime = date("Y-m-d H:i:s");

    $business_overview_img_old = $data["business_overview_img_old"];

    checkId($business_overview->business_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $business_overview->business_overview_img = checkToUploadGoogleDrive(
      $business_overview->business_overview_img, // FILES
      $business_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $business_overview->business_overview_img = checkDeleteGoogleDriveApiFiles(
      $business_overview->business_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($business_overview);
  }
  if ($businessOverviewUpdate == "businessOverviewListUpdate") {
    $business_overview->business_overview_aid = $_GET['business_overviewid'];
    $business_overview->business_overview_list_title_a = $data["business_overview_list_title_a"];
    $business_overview->business_overview_list_description_a = $data["business_overview_list_description_a"];
    $business_overview->business_overview_list_title_b = $data["business_overview_list_title_b"];
    $business_overview->business_overview_list_description_b = $data["business_overview_list_description_b"];
    $business_overview->business_overview_list_title_c = $data["business_overview_list_title_c"];
    $business_overview->business_overview_list_description_c = $data["business_overview_list_description_c"];
    $business_overview->business_overview_datetime = date("Y-m-d H:i:s");

    checkId($business_overview->business_overview_aid);
    // update
    $query = checkUpdateOverviewList($business_overview);
  }

  returnSuccess($business_overview, "business overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
