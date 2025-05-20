<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_overview = new HrisOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("hris_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $hrisOverviewUpdate = $data['hrisOverviewUpdate'];

  if ($hrisOverviewUpdate == "hrisOverviewUpdateImg") {

    $hris_overview->hris_overview_aid = $_GET['hris_overviewid'];
    $hris_overview->hris_overview_subtitle = $data["hris_overview_subtitle"];
    $hris_overview->hris_overview_title = $data["hris_overview_title"];
    $hris_overview->hris_overview_img = $data["hris_overview_img"];
    $hris_overview->hris_overview_datetime = date("Y-m-d H:i:s");

    $hris_overview_img_old = $data["hris_overview_img_old"];

    checkId($hris_overview->hris_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $hris_overview->hris_overview_img = checkToUploadGoogleDrive(
      $hris_overview->hris_overview_img, // FILES
      $hris_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $hris_overview->hris_overview_img = checkDeleteGoogleDriveApiFiles(
      $hris_overview->hris_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($hris_overview);
  }
  if ($hrisOverviewUpdate == "hrisOverviewListUpdate") {
    $hris_overview->hris_overview_aid = $_GET['hris_overviewid'];
    $hris_overview->hris_overview_list_title_a = $data["hris_overview_list_title_a"];
    $hris_overview->hris_overview_list_description_a = $data["hris_overview_list_description_a"];
    $hris_overview->hris_overview_list_title_b = $data["hris_overview_list_title_b"];
    $hris_overview->hris_overview_list_description_b = $data["hris_overview_list_description_b"];
    $hris_overview->hris_overview_list_title_c = $data["hris_overview_list_title_c"];
    $hris_overview->hris_overview_list_description_c = $data["hris_overview_list_description_c"];
    $hris_overview->hris_overview_datetime = date("Y-m-d H:i:s");

    checkId($hris_overview->hris_overview_aid);
    // update
    $query = checkUpdateOverviewList($hris_overview);
  }

  returnSuccess($hris_overview, "hris overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
