<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_banner = new SinglepageBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("singlepage_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateSinglepage = $data['isUpdateSinglepage'];

  if ($isUpdateSinglepage == "singlepageBannerUpdate") {

    $singlepage_banner->singlepage_banner_aid = $_GET['singlepage_bannerid'];
    $singlepage_banner->singlepage_banner_title = $data["singlepage_banner_title"];
    $singlepage_banner->singlepage_banner_title_bold = $data["singlepage_banner_title_bold"];
    $singlepage_banner->singlepage_banner_description = $data["singlepage_banner_description"];
    $singlepage_banner->singlepage_banner_button_text = $data["singlepage_banner_button_text"];
    $singlepage_banner->singlepage_banner_img = $data["singlepage_banner_img"];
    $singlepage_banner->singlepage_banner_datetime = date("Y-m-d H:i:s");

    $singlepage_banner_img_old = $data["singlepage_banner_img_old"];

    checkId($singlepage_banner->singlepage_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $singlepage_banner->singlepage_banner_img = checkToUploadGoogleDrive(
      $singlepage_banner->singlepage_banner_img, // FILES
      $singlepage_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $singlepage_banner->singlepage_banner_img = checkDeleteGoogleDriveApiFiles(
      $singlepage_banner->singlepage_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($singlepage_banner);
  }

  returnSuccess($singlepage_banner, "singlepage banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
