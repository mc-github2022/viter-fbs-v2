<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_overview = new ImmersionOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("immersion_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $immersionOverviewUpdate = $data['immersionOverviewUpdate'];

  if ($immersionOverviewUpdate == "immersionOverviewUpdateImg") {

    $immersion_overview->immersion_overview_aid = $_GET['immersion_overviewid'];
    $immersion_overview->immersion_overview_subtitle = $data["immersion_overview_subtitle"];
    $immersion_overview->immersion_overview_title = $data["immersion_overview_title"];
    $immersion_overview->immersion_overview_button_text = $data["immersion_overview_button_text"];
    $immersion_overview->immersion_overview_img = $data["immersion_overview_img"];
    $immersion_overview->immersion_overview_file = $data["immersion_overview_file"];
    $immersion_overview->immersion_overview_datetime = date("Y-m-d H:i:s");

    $immersion_overview_file_old = $data["immersion_overview_file_old"];
    $immersion_overview_img_old = $data["immersion_overview_img_old"];

    checkId($immersion_overview->immersion_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $immersion_overview->immersion_overview_img = checkToUploadGoogleDrive(
      $immersion_overview->immersion_overview_img, // FILES
      $immersion_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $immersion_overview->immersion_overview_img = checkDeleteGoogleDriveApiFiles(
      $immersion_overview->immersion_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $immersion_overview->immersion_overview_file = checkToUploadGoogleDrive(
      $immersion_overview->immersion_overview_file, // FILES
      $immersion_overview_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $immersion_overview->immersion_overview_file = checkDeleteGoogleDriveApiFiles(
      $immersion_overview->immersion_overview_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($immersion_overview);
  }
  if ($immersionOverviewUpdate == "immersionOverviewListUpdate") {
    $immersion_overview->immersion_overview_aid = $_GET['immersion_overviewid'];
    $immersion_overview->immersion_overview_list_title_a = $data["immersion_overview_list_title_a"];
    $immersion_overview->immersion_overview_list_description_a = $data["immersion_overview_list_description_a"];
    $immersion_overview->immersion_overview_list_title_b = $data["immersion_overview_list_title_b"];
    $immersion_overview->immersion_overview_list_description_b = $data["immersion_overview_list_description_b"];
    $immersion_overview->immersion_overview_list_title_c = $data["immersion_overview_list_title_c"];
    $immersion_overview->immersion_overview_list_description_c = $data["immersion_overview_list_description_c"];
    $immersion_overview->immersion_overview_datetime = date("Y-m-d H:i:s");

    checkId($immersion_overview->immersion_overview_aid);
    // update
    $query = checkUpdateOverviewList($immersion_overview);
  }

  returnSuccess($immersion_overview, "immersion overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
