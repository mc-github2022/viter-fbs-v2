<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_apply = new ImmersionApplyNow($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("immersion_applyid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateImmersionApplyNow = $data['isUpdateImmersionApplyNow'];

  if ($isUpdateImmersionApplyNow == "immersionApplyNowUpdate") {

    $immersion_apply->immersion_apply_aid = $_GET['immersion_applyid'];
    $immersion_apply->immersion_apply_subtitle = $data["immersion_apply_subtitle"];
    $immersion_apply->immersion_apply_title = $data["immersion_apply_title"];
    $immersion_apply->immersion_apply_requirement_list = $data["immersion_apply_requirement_list"];
    $immersion_apply->immersion_apply_button_text = $data["immersion_apply_button_text"];
    $immersion_apply->immersion_apply_img = $data["immersion_apply_img"];
    $immersion_apply->immersion_apply_datetime = date("Y-m-d H:i:s");

    $immersion_apply_img_old = $data["immersion_apply_img_old"];

    checkId($immersion_apply->immersion_apply_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $immersion_apply->immersion_apply_img = checkToUploadGoogleDrive(
      $immersion_apply->immersion_apply_img, // FILES
      $immersion_apply_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $immersion_apply->immersion_apply_img = checkDeleteGoogleDriveApiFiles(
      $immersion_apply->immersion_apply_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($immersion_apply);
  }

  returnSuccess($immersion_apply, "update immersion apply now", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
