<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_overview = new SocialMediaOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("social_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $socialOverviewUpdate = $data['socialOverviewUpdate'];

  if ($socialOverviewUpdate == "socialOverviewUpdateImg") {

    $social_overview->social_overview_aid = $_GET['social_overviewid'];
    $social_overview->social_overview_subtitle = $data["social_overview_subtitle"];
    $social_overview->social_overview_title = $data["social_overview_title"];
    $social_overview->social_overview_img = $data["social_overview_img"];
    $social_overview->social_overview_datetime = date("Y-m-d H:i:s");

    $social_overview_img_old = $data["social_overview_img_old"];

    checkId($social_overview->social_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $social_overview->social_overview_img = checkToUploadGoogleDrive(
      $social_overview->social_overview_img, // FILES
      $social_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $social_overview->social_overview_img = checkDeleteGoogleDriveApiFiles(
      $social_overview->social_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($social_overview);
  }
  if ($socialOverviewUpdate == "socialOverviewListUpdate") {
    $social_overview->social_overview_aid = $_GET['social_overviewid'];
    $social_overview->social_overview_list_title_a = $data["social_overview_list_title_a"];
    $social_overview->social_overview_list_description_a = $data["social_overview_list_description_a"];
    $social_overview->social_overview_list_title_b = $data["social_overview_list_title_b"];
    $social_overview->social_overview_list_description_b = $data["social_overview_list_description_b"];
    $social_overview->social_overview_list_title_c = $data["social_overview_list_title_c"];
    $social_overview->social_overview_list_description_c = $data["social_overview_list_description_c"];
    $social_overview->social_overview_list_title_d = $data["social_overview_list_title_d"];
    $social_overview->social_overview_list_description_d = $data["social_overview_list_description_d"];
    $social_overview->social_overview_datetime = date("Y-m-d H:i:s");

    checkId($social_overview->social_overview_aid);
    // update
    $query = checkUpdateOverviewList($social_overview);
  }

  returnSuccess($social_overview, "social overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
