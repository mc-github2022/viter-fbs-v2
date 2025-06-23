<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_banner = new WorkBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("work_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateWork = $data['isUpdateWork'];

  if ($isUpdateWork == "workBannerUpdate") {

    $work_banner->work_banner_aid = $_GET['work_bannerid'];
    $work_banner->work_banner_title = $data["work_banner_title"];
    $work_banner->work_banner_title_bold = $data["work_banner_title_bold"];
    $work_banner->work_banner_description = $data["work_banner_description"];
    $work_banner->work_banner_button_text = $data["work_banner_button_text"];
    $work_banner->work_banner_img = $data["work_banner_img"];
    $work_banner->work_banner_datetime = date("Y-m-d H:i:s");

    $work_banner_img_old = $data["work_banner_img_old"];

    checkId($work_banner->work_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_banner->work_banner_img = checkToUploadGoogleDrive(
      $work_banner->work_banner_img, // FILES
      $work_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_banner->work_banner_img = checkDeleteGoogleDriveApiFiles(
      $work_banner->work_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($work_banner);
  }

  returnSuccess($work_banner, "work banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
