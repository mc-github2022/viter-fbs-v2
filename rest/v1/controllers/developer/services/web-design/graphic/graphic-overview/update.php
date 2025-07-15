<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_overview = new GraphicOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("graphic_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $graphicOverviewUpdate = $data['graphicOverviewUpdate'];

  if ($graphicOverviewUpdate == "graphicOverviewUpdateImg") {

    $graphic_overview->graphic_overview_aid = $_GET['graphic_overviewid'];
    $graphic_overview->graphic_overview_subtitle_a = $data["graphic_overview_subtitle_a"];
    $graphic_overview->graphic_overview_subtitle_b = $data["graphic_overview_subtitle_b"];
    $graphic_overview->graphic_overview_title = $data["graphic_overview_title"];
    $graphic_overview->graphic_overview_button_text = $data["graphic_overview_button_text"];
    $graphic_overview->graphic_overview_img = $data["graphic_overview_img"];
    $graphic_overview->graphic_overview_datetime = date("Y-m-d H:i:s");

    $graphic_overview_img_old = $data["graphic_overview_img_old"];

    checkId($graphic_overview->graphic_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $graphic_overview->graphic_overview_img = checkToUploadGoogleDrive(
      $graphic_overview->graphic_overview_img, // FILES
      $graphic_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $graphic_overview->graphic_overview_img = checkDeleteGoogleDriveApiFiles(
      $graphic_overview->graphic_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($graphic_overview);
  }
  if ($graphicOverviewUpdate == "graphicOverviewListUpdate") {
    $graphic_overview->graphic_overview_aid = $_GET['graphic_overviewid'];
    $graphic_overview->graphic_overview_list_title_a = $data["graphic_overview_list_title_a"];
    $graphic_overview->graphic_overview_list_description_a = $data["graphic_overview_list_description_a"];
    $graphic_overview->graphic_overview_list_title_b = $data["graphic_overview_list_title_b"];
    $graphic_overview->graphic_overview_list_description_b = $data["graphic_overview_list_description_b"];
    $graphic_overview->graphic_overview_list_title_c = $data["graphic_overview_list_title_c"];
    $graphic_overview->graphic_overview_list_description_c = $data["graphic_overview_list_description_c"];
    $graphic_overview->graphic_overview_datetime = date("Y-m-d H:i:s");

    checkId($graphic_overview->graphic_overview_aid);
    // update
    $query = checkUpdateOverviewList($graphic_overview);
  }

  returnSuccess($graphic_overview, "graphic overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
