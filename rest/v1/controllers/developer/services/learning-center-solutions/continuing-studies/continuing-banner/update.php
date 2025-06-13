<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_banner = new ContinuingBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("continuing_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateContinuing = $data['isUpdateContinuing'];

  if ($isUpdateContinuing == "continuingBannerUpdate") {

    $continuing_banner->continuing_banner_aid = $_GET['continuing_bannerid'];
    $continuing_banner->continuing_banner_title = $data["continuing_banner_title"];
    $continuing_banner->continuing_banner_title_bold = $data["continuing_banner_title_bold"];
    $continuing_banner->continuing_banner_description = $data["continuing_banner_description"];
    $continuing_banner->continuing_banner_button_text = $data["continuing_banner_button_text"];
    $continuing_banner->continuing_banner_button_link = $data["continuing_banner_button_link"];
    $continuing_banner->continuing_banner_img = $data["continuing_banner_img"];
    $continuing_banner->continuing_banner_datetime = date("Y-m-d H:i:s");

    $continuing_banner_img_old = $data["continuing_banner_img_old"];

    checkId($continuing_banner->continuing_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $continuing_banner->continuing_banner_img = checkToUploadGoogleDrive(
      $continuing_banner->continuing_banner_img, // FILES
      $continuing_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $continuing_banner->continuing_banner_img = checkDeleteGoogleDriveApiFiles(
      $continuing_banner->continuing_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($continuing_banner);
  }

  returnSuccess($continuing_banner, "continuing banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
