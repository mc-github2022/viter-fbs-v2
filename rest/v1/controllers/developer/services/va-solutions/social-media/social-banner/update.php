<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_banner = new SocialMediaBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("social_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateSocial = $data['isUpdateSocial'];

  if ($isUpdateSocial == "socialBannerUpdate") {

    $social_banner->social_banner_aid = $_GET['social_bannerid'];
    $social_banner->social_banner_title = $data["social_banner_title"];
    $social_banner->social_banner_title_bold = $data["social_banner_title_bold"];
    $social_banner->social_banner_description = $data["social_banner_description"];
    $social_banner->social_banner_button_text = $data["social_banner_button_text"];
    $social_banner->social_banner_img = $data["social_banner_img"];
    $social_banner->social_banner_datetime = date("Y-m-d H:i:s");

    $social_banner_img_old = $data["social_banner_img_old"];

    checkId($social_banner->social_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $social_banner->social_banner_img = checkToUploadGoogleDrive(
      $social_banner->social_banner_img, // FILES
      $social_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $social_banner->social_banner_img = checkDeleteGoogleDriveApiFiles(
      $social_banner->social_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($social_banner);
  }

  returnSuccess($social_banner, "social banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
