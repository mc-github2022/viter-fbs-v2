<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_banner = new RegistrationBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("registration_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateRegistration = $data['isUpdateRegistration'];

  if ($isUpdateRegistration == "registrationBannerUpdate") {

    $registration_banner->registration_banner_aid = $_GET['registration_bannerid'];
    $registration_banner->registration_banner_title = $data["registration_banner_title"];
    $registration_banner->registration_banner_title_bold = $data["registration_banner_title_bold"];
    $registration_banner->registration_banner_description = $data["registration_banner_description"];
    $registration_banner->registration_banner_button_text = $data["registration_banner_button_text"];
    $registration_banner->registration_banner_img = $data["registration_banner_img"];
    $registration_banner->registration_banner_datetime = date("Y-m-d H:i:s");

    $registration_banner_img_old = $data["registration_banner_img_old"];

    checkId($registration_banner->registration_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $registration_banner->registration_banner_img = checkToUploadGoogleDrive(
      $registration_banner->registration_banner_img, // FILES
      $registration_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $registration_banner->registration_banner_img = checkDeleteGoogleDriveApiFiles(
      $registration_banner->registration_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($registration_banner);
  }

  returnSuccess($registration_banner, "registration banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
