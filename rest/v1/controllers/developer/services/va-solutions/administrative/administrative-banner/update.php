<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_banner = new AdministrativeBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("administrative_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateAdministrative = $data['isUpdateAdministrative'];

  if ($isUpdateAdministrative == "administrativeBannerUpdate") {

    $administrative_banner->administrative_banner_aid = $_GET['administrative_bannerid'];
    $administrative_banner->administrative_banner_title = $data["administrative_banner_title"];
    $administrative_banner->administrative_banner_title_bold = $data["administrative_banner_title_bold"];
    $administrative_banner->administrative_banner_description = $data["administrative_banner_description"];
    $administrative_banner->administrative_banner_button_text = $data["administrative_banner_button_text"];
    $administrative_banner->administrative_banner_img = $data["administrative_banner_img"];
    $administrative_banner->administrative_banner_datetime = date("Y-m-d H:i:s");

    $administrative_banner_img_old = $data["administrative_banner_img_old"];

    checkId($administrative_banner->administrative_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $administrative_banner->administrative_banner_img = checkToUploadGoogleDrive(
      $administrative_banner->administrative_banner_img, // FILES
      $administrative_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $administrative_banner->administrative_banner_img = checkDeleteGoogleDriveApiFiles(
      $administrative_banner->administrative_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($administrative_banner);
  }

  returnSuccess($administrative_banner, "administrative banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
