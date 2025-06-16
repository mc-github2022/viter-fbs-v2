<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_overview = new AdministrativeOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("administrative_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $administrativeOverviewUpdate = $data['administrativeOverviewUpdate'];

  if ($administrativeOverviewUpdate == "administrativeOverviewUpdateImg") {

    $administrative_overview->administrative_overview_aid = $_GET['administrative_overviewid'];
    $administrative_overview->administrative_overview_subtitle = $data["administrative_overview_subtitle"];
    $administrative_overview->administrative_overview_title = $data["administrative_overview_title"];
    $administrative_overview->administrative_overview_img = $data["administrative_overview_img"];
    $administrative_overview->administrative_overview_datetime = date("Y-m-d H:i:s");

    $administrative_overview_img_old = $data["administrative_overview_img_old"];

    checkId($administrative_overview->administrative_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $administrative_overview->administrative_overview_img = checkToUploadGoogleDrive(
      $administrative_overview->administrative_overview_img, // FILES
      $administrative_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $administrative_overview->administrative_overview_img = checkDeleteGoogleDriveApiFiles(
      $administrative_overview->administrative_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($administrative_overview);
  }
  if ($administrativeOverviewUpdate == "administrativeOverviewListUpdate") {
    $administrative_overview->administrative_overview_aid = $_GET['administrative_overviewid'];
    $administrative_overview->administrative_overview_list_title_a = $data["administrative_overview_list_title_a"];
    $administrative_overview->administrative_overview_list_description_a = $data["administrative_overview_list_description_a"];
    $administrative_overview->administrative_overview_list_title_b = $data["administrative_overview_list_title_b"];
    $administrative_overview->administrative_overview_list_description_b = $data["administrative_overview_list_description_b"];
    $administrative_overview->administrative_overview_list_title_c = $data["administrative_overview_list_title_c"];
    $administrative_overview->administrative_overview_list_description_c = $data["administrative_overview_list_description_c"];
    $administrative_overview->administrative_overview_datetime = date("Y-m-d H:i:s");

    checkId($administrative_overview->administrative_overview_aid);
    // update
    $query = checkUpdateOverviewList($administrative_overview);
  }

  returnSuccess($administrative_overview, "administrative overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
