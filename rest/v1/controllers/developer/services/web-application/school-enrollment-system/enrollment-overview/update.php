<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_overview = new EnrollmentOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("enrollment_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $enrollmentOverviewUpdate = $data['enrollmentOverviewUpdate'];

  if ($enrollmentOverviewUpdate == "enrollmentOverviewUpdateImg") {

    $enrollment_overview->enrollment_overview_aid = $_GET['enrollment_overviewid'];
    $enrollment_overview->enrollment_overview_subtitle = $data["enrollment_overview_subtitle"];
    $enrollment_overview->enrollment_overview_title = $data["enrollment_overview_title"];
    $enrollment_overview->enrollment_overview_button_text = $data["enrollment_overview_button_text"];
    $enrollment_overview->enrollment_overview_img = $data["enrollment_overview_img"];
    $enrollment_overview->enrollment_overview_datetime = date("Y-m-d H:i:s");

    $enrollment_overview_img_old = $data["enrollment_overview_img_old"];

    checkId($enrollment_overview->enrollment_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $enrollment_overview->enrollment_overview_img = checkToUploadGoogleDrive(
      $enrollment_overview->enrollment_overview_img, // FILES
      $enrollment_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $enrollment_overview->enrollment_overview_img = checkDeleteGoogleDriveApiFiles(
      $enrollment_overview->enrollment_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($enrollment_overview);
  }
  if ($enrollmentOverviewUpdate == "enrollmentOverviewListUpdate") {
    $enrollment_overview->enrollment_overview_aid = $_GET['enrollment_overviewid'];
    $enrollment_overview->enrollment_overview_list_title_a = $data["enrollment_overview_list_title_a"];
    $enrollment_overview->enrollment_overview_list_description_a = $data["enrollment_overview_list_description_a"];
    $enrollment_overview->enrollment_overview_list_title_b = $data["enrollment_overview_list_title_b"];
    $enrollment_overview->enrollment_overview_list_description_b = $data["enrollment_overview_list_description_b"];
    $enrollment_overview->enrollment_overview_list_title_c = $data["enrollment_overview_list_title_c"];
    $enrollment_overview->enrollment_overview_list_description_c = $data["enrollment_overview_list_description_c"];
    $enrollment_overview->enrollment_overview_datetime = date("Y-m-d H:i:s");

    checkId($enrollment_overview->enrollment_overview_aid);
    // update
    $query = checkUpdateOverviewList($enrollment_overview);
  }

  returnSuccess($enrollment_overview, "enrollment overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
