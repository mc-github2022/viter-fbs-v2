<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_overview = new RegistrationOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("registration_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $registrationOverviewUpdate = $data['registrationOverviewUpdate'];

  if ($registrationOverviewUpdate == "registrationOverviewUpdateImg") {

    $registration_overview->registration_overview_aid = $_GET['registration_overviewid'];
    $registration_overview->registration_overview_subtitle = $data["registration_overview_subtitle"];
    $registration_overview->registration_overview_title = $data["registration_overview_title"];
    $registration_overview->registration_overview_img = $data["registration_overview_img"];
    $registration_overview->registration_overview_datetime = date("Y-m-d H:i:s");

    $registration_overview_img_old = $data["registration_overview_img_old"];

    checkId($registration_overview->registration_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $registration_overview->registration_overview_img = checkToUploadGoogleDrive(
      $registration_overview->registration_overview_img, // FILES
      $registration_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $registration_overview->registration_overview_img = checkDeleteGoogleDriveApiFiles(
      $registration_overview->registration_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($registration_overview);
  }
  if ($registrationOverviewUpdate == "registrationOverviewListUpdate") {
    $registration_overview->registration_overview_aid = $_GET['registration_overviewid'];
    $registration_overview->registration_overview_list_title_a = $data["registration_overview_list_title_a"];
    $registration_overview->registration_overview_list_description_a = $data["registration_overview_list_description_a"];
    $registration_overview->registration_overview_list_title_b = $data["registration_overview_list_title_b"];
    $registration_overview->registration_overview_list_description_b = $data["registration_overview_list_description_b"];
    $registration_overview->registration_overview_list_title_c = $data["registration_overview_list_title_c"];
    $registration_overview->registration_overview_list_description_c = $data["registration_overview_list_description_c"];
    $registration_overview->registration_overview_datetime = date("Y-m-d H:i:s");

    checkId($registration_overview->registration_overview_aid);
    // update
    $query = checkUpdateOverviewList($registration_overview);
  }

  returnSuccess($registration_overview, "registration overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
