<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_overview = new ContinuingOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("continuing_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $continuingOverviewUpdate = $data['continuingOverviewUpdate'];

  if ($continuingOverviewUpdate == "continuingOverviewUpdateImg") {

    $continuing_overview->continuing_overview_aid = $_GET['continuing_overviewid'];
    $continuing_overview->continuing_overview_subtitle = $data["continuing_overview_subtitle"];
    $continuing_overview->continuing_overview_title = $data["continuing_overview_title"];
    $continuing_overview->continuing_overview_button_text = $data["continuing_overview_button_text"];
    $continuing_overview->continuing_overview_img = $data["continuing_overview_img"];
    $continuing_overview->continuing_overview_datetime = date("Y-m-d H:i:s");

    $continuing_overview_img_old = $data["continuing_overview_img_old"];

    checkId($continuing_overview->continuing_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $continuing_overview->continuing_overview_img = checkToUploadGoogleDrive(
      $continuing_overview->continuing_overview_img, // FILES
      $continuing_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $continuing_overview->continuing_overview_img = checkDeleteGoogleDriveApiFiles(
      $continuing_overview->continuing_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );


    // update
    $query = checkUpdate($continuing_overview);
  }
  if ($continuingOverviewUpdate == "continuingOverviewListUpdate") {
    $continuing_overview->continuing_overview_aid = $_GET['continuing_overviewid'];
    $continuing_overview->continuing_overview_list_title_a = $data["continuing_overview_list_title_a"];
    $continuing_overview->continuing_overview_list_description_a = $data["continuing_overview_list_description_a"];
    $continuing_overview->continuing_overview_list_title_b = $data["continuing_overview_list_title_b"];
    $continuing_overview->continuing_overview_list_description_b = $data["continuing_overview_list_description_b"];
    $continuing_overview->continuing_overview_list_title_c = $data["continuing_overview_list_title_c"];
    $continuing_overview->continuing_overview_list_description_c = $data["continuing_overview_list_description_c"];
    $continuing_overview->continuing_overview_datetime = date("Y-m-d H:i:s");

    checkId($continuing_overview->continuing_overview_aid);
    // update
    $query = checkUpdateOverviewList($continuing_overview);
  }

  returnSuccess($continuing_overview, "continuing overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
