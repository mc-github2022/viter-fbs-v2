<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_apply = new OjtApplyNow($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ojt_applyid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateApplyNow = $data['isUpdateApplyNow'];

  if ($isUpdateApplyNow == "ojtApplyNowUpdate") {

    $ojt_apply->ojt_apply_aid = $_GET['ojt_applyid'];
    $ojt_apply->ojt_apply_subtitle = $data["ojt_apply_subtitle"];
    $ojt_apply->ojt_apply_title = $data["ojt_apply_title"];
    $ojt_apply->ojt_apply_requirement_list = $data["ojt_apply_requirement_list"];
    $ojt_apply->ojt_apply_button_text = $data["ojt_apply_button_text"];
    $ojt_apply->ojt_apply_img = $data["ojt_apply_img"];
    $ojt_apply->ojt_apply_datetime = date("Y-m-d H:i:s");

    $ojt_apply_img_old = $data["ojt_apply_img_old"];

    checkId($ojt_apply->ojt_apply_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $ojt_apply->ojt_apply_img = checkToUploadGoogleDrive(
      $ojt_apply->ojt_apply_img, // FILES
      $ojt_apply_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $ojt_apply->ojt_apply_img = checkDeleteGoogleDriveApiFiles(
      $ojt_apply->ojt_apply_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($ojt_apply);
  }

  returnSuccess($ojt_apply, "update ojt apply now", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
