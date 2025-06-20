<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_overview = new SinglepageOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("singlepage_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $singlepageOverviewUpdate = $data['singlepageOverviewUpdate'];

  if ($singlepageOverviewUpdate == "singlepageOverviewUpdateImg") {

    $singlepage_overview->singlepage_overview_aid = $_GET['singlepage_overviewid'];
    $singlepage_overview->singlepage_overview_subtitle = $data["singlepage_overview_subtitle"];
    $singlepage_overview->singlepage_overview_title = $data["singlepage_overview_title"];
    $singlepage_overview->singlepage_overview_button_text = $data["singlepage_overview_button_text"];
    $singlepage_overview->singlepage_overview_img = $data["singlepage_overview_img"];
    $singlepage_overview->singlepage_overview_file = $data["singlepage_overview_file"];
    $singlepage_overview->singlepage_overview_datetime = date("Y-m-d H:i:s");

    $singlepage_overview_file_old = $data["singlepage_overview_file_old"];
    $singlepage_overview_img_old = $data["singlepage_overview_img_old"];

    checkId($singlepage_overview->singlepage_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $singlepage_overview->singlepage_overview_img = checkToUploadGoogleDrive(
      $singlepage_overview->singlepage_overview_img, // FILES
      $singlepage_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $singlepage_overview->singlepage_overview_img = checkDeleteGoogleDriveApiFiles(
      $singlepage_overview->singlepage_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $singlepage_overview->singlepage_overview_file = checkToUploadGoogleDrive(
      $singlepage_overview->singlepage_overview_file, // FILES
      $singlepage_overview_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $singlepage_overview->singlepage_overview_file = checkDeleteGoogleDriveApiFiles(
      $singlepage_overview->singlepage_overview_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($singlepage_overview);
  }
  if ($singlepageOverviewUpdate == "singlepageOverviewListUpdate") {
    $singlepage_overview->singlepage_overview_aid = $_GET['singlepage_overviewid'];
    $singlepage_overview->singlepage_overview_list_title_a = $data["singlepage_overview_list_title_a"];
    $singlepage_overview->singlepage_overview_list_description_a = $data["singlepage_overview_list_description_a"];
    $singlepage_overview->singlepage_overview_list_title_b = $data["singlepage_overview_list_title_b"];
    $singlepage_overview->singlepage_overview_list_description_b = $data["singlepage_overview_list_description_b"];
    $singlepage_overview->singlepage_overview_list_title_c = $data["singlepage_overview_list_title_c"];
    $singlepage_overview->singlepage_overview_list_description_c = $data["singlepage_overview_list_description_c"];
    $singlepage_overview->singlepage_overview_datetime = date("Y-m-d H:i:s");

    checkId($singlepage_overview->singlepage_overview_aid);
    // update
    $query = checkUpdateOverviewList($singlepage_overview);
  }

  returnSuccess($singlepage_overview, "singlepage overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
