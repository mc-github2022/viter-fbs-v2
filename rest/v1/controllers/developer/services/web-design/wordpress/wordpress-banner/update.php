<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_banner = new WordpressBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("wordpress_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateWordpress = $data['isUpdateWordpress'];

  if ($isUpdateWordpress == "wordpressBannerUpdate") {

    $wordpress_banner->wordpress_banner_aid = $_GET['wordpress_bannerid'];
    $wordpress_banner->wordpress_banner_title = $data["wordpress_banner_title"];
    $wordpress_banner->wordpress_banner_title_bold = $data["wordpress_banner_title_bold"];
    $wordpress_banner->wordpress_banner_description = $data["wordpress_banner_description"];
    $wordpress_banner->wordpress_banner_button_text = $data["wordpress_banner_button_text"];
    $wordpress_banner->wordpress_banner_img = $data["wordpress_banner_img"];
    $wordpress_banner->wordpress_banner_datetime = date("Y-m-d H:i:s");

    $wordpress_banner_img_old = $data["wordpress_banner_img_old"];

    checkId($wordpress_banner->wordpress_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $wordpress_banner->wordpress_banner_img = checkToUploadGoogleDrive(
      $wordpress_banner->wordpress_banner_img, // FILES
      $wordpress_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $wordpress_banner->wordpress_banner_img = checkDeleteGoogleDriveApiFiles(
      $wordpress_banner->wordpress_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($wordpress_banner);
  }

  returnSuccess($wordpress_banner, "wordpress banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
