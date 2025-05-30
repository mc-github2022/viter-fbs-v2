<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$bookkeeping_banner = new BookkeepingBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("bookkeeping_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateBookkeeping = $data['isUpdateBookkeeping'];

  if ($isUpdateBookkeeping == "bookkeepingBannerUpdate") {

    $bookkeeping_banner->bookkeeping_banner_aid = $_GET['bookkeeping_bannerid'];
    $bookkeeping_banner->bookkeeping_banner_title = $data["bookkeeping_banner_title"];
    $bookkeeping_banner->bookkeeping_banner_title_bold = $data["bookkeeping_banner_title_bold"];
    $bookkeeping_banner->bookkeeping_banner_description = $data["bookkeeping_banner_description"];
    $bookkeeping_banner->bookkeeping_banner_button_text = $data["bookkeeping_banner_button_text"];
    $bookkeeping_banner->bookkeeping_banner_img = $data["bookkeeping_banner_img"];
    $bookkeeping_banner->bookkeeping_banner_datetime = date("Y-m-d H:i:s");

    $bookkeeping_banner_img_old = $data["bookkeeping_banner_img_old"];

    checkId($bookkeeping_banner->bookkeeping_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $bookkeeping_banner->bookkeeping_banner_img = checkToUploadGoogleDrive(
      $bookkeeping_banner->bookkeeping_banner_img, // FILES
      $bookkeeping_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $bookkeeping_banner->bookkeeping_banner_img = checkDeleteGoogleDriveApiFiles(
      $bookkeeping_banner->bookkeeping_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($bookkeeping_banner);
  }

  returnSuccess($bookkeeping_banner, "bookkeeping banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
