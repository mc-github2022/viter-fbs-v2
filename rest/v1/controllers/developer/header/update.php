<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$header = new Header($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("headerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateHeader = $data['isUpdateHeader'];



  if ($isUpdateHeader == "headerUpdate") {
    $header->header_aid = $_GET['headerid'];
    $header->header_logo_img = $data["header_logo_img"];
    $header->header_nav_a = $data["header_nav_a"];
    $header->header_nav_b = $data["header_nav_b"];
    $header->header_nav_c = $data["header_nav_c"];
    $header->header_nav_d = $data["header_nav_d"];
    $header->header_payment_link = $data["header_payment_link"];
    $header->header_button_text = $data["header_button_text"];
    $header->header_datetime = date("Y-m-d H:i:s");

    $header_logo_img_old = $data["header_logo_img_old"];

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $header->header_logo_img = checkToUploadGoogleDrive(
      $header->header_logo_img, // FILES
      $header_logo_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $header->header_logo_img = checkDeleteGoogleDriveApiFiles(
      $header->header_logo_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    checkId($header->header_aid);
    $query = checkUpdate($header);
  }


  returnSuccess($header, "header update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
