<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_banner = new MarketingBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("marketing_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateMarketing = $data['isUpdateMarketing'];

  if ($isUpdateMarketing == "marketingBannerUpdate") {

    $marketing_banner->marketing_banner_aid = $_GET['marketing_bannerid'];
    $marketing_banner->marketing_banner_title = $data["marketing_banner_title"];
    $marketing_banner->marketing_banner_title_bold = $data["marketing_banner_title_bold"];
    $marketing_banner->marketing_banner_description = $data["marketing_banner_description"];
    $marketing_banner->marketing_banner_button_text = $data["marketing_banner_button_text"];
    $marketing_banner->marketing_banner_img = $data["marketing_banner_img"];
    $marketing_banner->marketing_banner_datetime = date("Y-m-d H:i:s");

    $marketing_banner_img_old = $data["marketing_banner_img_old"];

    checkId($marketing_banner->marketing_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $marketing_banner->marketing_banner_img = checkToUploadGoogleDrive(
      $marketing_banner->marketing_banner_img, // FILES
      $marketing_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $marketing_banner->marketing_banner_img = checkDeleteGoogleDriveApiFiles(
      $marketing_banner->marketing_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($marketing_banner);
  }

  returnSuccess($marketing_banner, "marketing banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
