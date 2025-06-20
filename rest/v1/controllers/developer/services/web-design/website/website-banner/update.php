<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_banner = new WebsiteBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("website_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateWebsite = $data['isUpdateWebsite'];

  if ($isUpdateWebsite == "websiteBannerUpdate") {

    $website_banner->website_banner_aid = $_GET['website_bannerid'];
    $website_banner->website_banner_title = $data["website_banner_title"];
    $website_banner->website_banner_title_bold = $data["website_banner_title_bold"];
    $website_banner->website_banner_description = $data["website_banner_description"];
    $website_banner->website_banner_button_text = $data["website_banner_button_text"];
    $website_banner->website_banner_img = $data["website_banner_img"];
    $website_banner->website_banner_datetime = date("Y-m-d H:i:s");

    $website_banner_img_old = $data["website_banner_img_old"];

    checkId($website_banner->website_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $website_banner->website_banner_img = checkToUploadGoogleDrive(
      $website_banner->website_banner_img, // FILES
      $website_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $website_banner->website_banner_img = checkDeleteGoogleDriveApiFiles(
      $website_banner->website_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($website_banner);
  }

  returnSuccess($website_banner, "website banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
