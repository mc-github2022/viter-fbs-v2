<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_banner = new ImmersionBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("immersion_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateImmersion = $data['isUpdateImmersion'];

  if ($isUpdateImmersion == "immersionBannerUpdate") {

    $immersion_banner->immersion_banner_aid = $_GET['immersion_bannerid'];
    $immersion_banner->immersion_banner_title = $data["immersion_banner_title"];
    $immersion_banner->immersion_banner_title_bold = $data["immersion_banner_title_bold"];
    $immersion_banner->immersion_banner_description = $data["immersion_banner_description"];
    $immersion_banner->immersion_banner_button_text = $data["immersion_banner_button_text"];
    $immersion_banner->immersion_banner_button_link = $data["immersion_banner_button_link"];
    $immersion_banner->immersion_banner_img = $data["immersion_banner_img"];
    $immersion_banner->immersion_banner_datetime = date("Y-m-d H:i:s");

    $immersion_banner_img_old = $data["immersion_banner_img_old"];

    checkId($immersion_banner->immersion_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $immersion_banner->immersion_banner_img = checkToUploadGoogleDrive(
      $immersion_banner->immersion_banner_img, // FILES
      $immersion_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $immersion_banner->immersion_banner_img = checkDeleteGoogleDriveApiFiles(
      $immersion_banner->immersion_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($immersion_banner);
  }

  returnSuccess($immersion_banner, "immersion banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
