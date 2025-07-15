<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_banner = new GraphicBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("graphic_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateGraphic = $data['isUpdateGraphic'];

  if ($isUpdateGraphic == "graphicBannerUpdate") {

    $graphic_banner->graphic_banner_aid = $_GET['graphic_bannerid'];
    $graphic_banner->graphic_banner_title = $data["graphic_banner_title"];
    $graphic_banner->graphic_banner_title_bold = $data["graphic_banner_title_bold"];
    $graphic_banner->graphic_banner_description = $data["graphic_banner_description"];
    $graphic_banner->graphic_banner_button_text = $data["graphic_banner_button_text"];
    $graphic_banner->graphic_banner_img = $data["graphic_banner_img"];
    $graphic_banner->graphic_banner_datetime = date("Y-m-d H:i:s");

    $graphic_banner_img_old = $data["graphic_banner_img_old"];

    checkId($graphic_banner->graphic_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $graphic_banner->graphic_banner_img = checkToUploadGoogleDrive(
      $graphic_banner->graphic_banner_img, // FILES
      $graphic_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $graphic_banner->graphic_banner_img = checkDeleteGoogleDriveApiFiles(
      $graphic_banner->graphic_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($graphic_banner);
  }

  returnSuccess($graphic_banner, "graphic banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
