<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_banner = new OjtBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ojt_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateOjt = $data['isUpdateOjt'];

  if ($isUpdateOjt == "ojtBannerUpdate") {

    $ojt_banner->ojt_banner_aid = $_GET['ojt_bannerid'];
    $ojt_banner->ojt_banner_title = $data["ojt_banner_title"];
    $ojt_banner->ojt_banner_title_bold = $data["ojt_banner_title_bold"];
    $ojt_banner->ojt_banner_description = $data["ojt_banner_description"];
    $ojt_banner->ojt_banner_button_text = $data["ojt_banner_button_text"];
    $ojt_banner->ojt_banner_button_link = $data["ojt_banner_button_link"];
    $ojt_banner->ojt_banner_img = $data["ojt_banner_img"];
    $ojt_banner->ojt_banner_datetime = date("Y-m-d H:i:s");

    $ojt_banner_img_old = $data["ojt_banner_img_old"];

    checkId($ojt_banner->ojt_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $ojt_banner->ojt_banner_img = checkToUploadGoogleDrive(
      $ojt_banner->ojt_banner_img, // FILES
      $ojt_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $ojt_banner->ojt_banner_img = checkDeleteGoogleDriveApiFiles(
      $ojt_banner->ojt_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($ojt_banner);
  }

  returnSuccess($ojt_banner, "ojt banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
