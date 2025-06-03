<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_overview = new OjtOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ojt_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $ojtOverviewUpdate = $data['ojtOverviewUpdate'];

  if ($ojtOverviewUpdate == "ojtOverviewUpdateImg") {

    $ojt_overview->ojt_overview_aid = $_GET['ojt_overviewid'];
    $ojt_overview->ojt_overview_subtitle = $data["ojt_overview_subtitle"];
    $ojt_overview->ojt_overview_title = $data["ojt_overview_title"];
    $ojt_overview->ojt_overview_button_text = $data["ojt_overview_button_text"];
    $ojt_overview->ojt_overview_img = $data["ojt_overview_img"];
    $ojt_overview->ojt_overview_file = $data["ojt_overview_file"];
    $ojt_overview->ojt_overview_datetime = date("Y-m-d H:i:s");

    $ojt_overview_file_old = $data["ojt_overview_file_old"];
    $ojt_overview_img_old = $data["ojt_overview_img_old"];

    checkId($ojt_overview->ojt_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $ojt_overview->ojt_overview_img = checkToUploadGoogleDrive(
      $ojt_overview->ojt_overview_img, // FILES
      $ojt_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $ojt_overview->ojt_overview_img = checkDeleteGoogleDriveApiFiles(
      $ojt_overview->ojt_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $ojt_overview->ojt_overview_file = checkToUploadGoogleDrive(
      $ojt_overview->ojt_overview_file, // FILES
      $ojt_overview_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $ojt_overview->ojt_overview_file = checkDeleteGoogleDriveApiFiles(
      $ojt_overview->ojt_overview_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($ojt_overview);
  }
  if ($ojtOverviewUpdate == "ojtOverviewListUpdate") {
    $ojt_overview->ojt_overview_aid = $_GET['ojt_overviewid'];
    $ojt_overview->ojt_overview_list_title_a = $data["ojt_overview_list_title_a"];
    $ojt_overview->ojt_overview_list_description_a = $data["ojt_overview_list_description_a"];
    $ojt_overview->ojt_overview_list_title_b = $data["ojt_overview_list_title_b"];
    $ojt_overview->ojt_overview_list_description_b = $data["ojt_overview_list_description_b"];
    $ojt_overview->ojt_overview_list_title_c = $data["ojt_overview_list_title_c"];
    $ojt_overview->ojt_overview_list_description_c = $data["ojt_overview_list_description_c"];
    $ojt_overview->ojt_overview_datetime = date("Y-m-d H:i:s");

    checkId($ojt_overview->ojt_overview_aid);
    // update
    $query = checkUpdateOverviewList($ojt_overview);
  }

  returnSuccess($ojt_overview, "ojt overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
