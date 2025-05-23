<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_banner = new EnrollmentBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("enrollment_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateEnrollment = $data['isUpdateEnrollment'];

  if ($isUpdateEnrollment == "enrollmentBannerUpdate") {

    $enrollment_banner->enrollment_banner_aid = $_GET['enrollment_bannerid'];
    $enrollment_banner->enrollment_banner_title = $data["enrollment_banner_title"];
    $enrollment_banner->enrollment_banner_title_bold = $data["enrollment_banner_title_bold"];
    $enrollment_banner->enrollment_banner_description = $data["enrollment_banner_description"];
    $enrollment_banner->enrollment_banner_button_text = $data["enrollment_banner_button_text"];
    $enrollment_banner->enrollment_banner_img = $data["enrollment_banner_img"];
    $enrollment_banner->enrollment_banner_datetime = date("Y-m-d H:i:s");

    $enrollment_banner_img_old = $data["enrollment_banner_img_old"];

    checkId($enrollment_banner->enrollment_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $enrollment_banner->enrollment_banner_img = checkToUploadGoogleDrive(
      $enrollment_banner->enrollment_banner_img, // FILES
      $enrollment_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $enrollment_banner->enrollment_banner_img = checkDeleteGoogleDriveApiFiles(
      $enrollment_banner->enrollment_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($enrollment_banner);
  }

  returnSuccess($enrollment_banner, "enrollment banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
