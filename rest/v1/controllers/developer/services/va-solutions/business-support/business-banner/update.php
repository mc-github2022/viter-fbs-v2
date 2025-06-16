<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_banner = new BusinessBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("business_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateBusiness = $data['isUpdateBusiness'];

  if ($isUpdateBusiness == "businessBannerUpdate") {

    $business_banner->business_banner_aid = $_GET['business_bannerid'];
    $business_banner->business_banner_title = $data["business_banner_title"];
    $business_banner->business_banner_title_bold = $data["business_banner_title_bold"];
    $business_banner->business_banner_description = $data["business_banner_description"];
    $business_banner->business_banner_button_text = $data["business_banner_button_text"];
    $business_banner->business_banner_img = $data["business_banner_img"];
    $business_banner->business_banner_datetime = date("Y-m-d H:i:s");

    $business_banner_img_old = $data["business_banner_img_old"];

    checkId($business_banner->business_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $business_banner->business_banner_img = checkToUploadGoogleDrive(
      $business_banner->business_banner_img, // FILES
      $business_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $business_banner->business_banner_img = checkDeleteGoogleDriveApiFiles(
      $business_banner->business_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($business_banner);
  }

  returnSuccess($business_banner, "business banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
