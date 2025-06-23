<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_profile = new WorkCompanyProfile($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("work_profileid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $workProfileUpdate = $data['workProfileUpdate'];

  if ($workProfileUpdate == "workProfileUpdateImg") {

    $work_profile->work_profile_aid = $_GET['work_profileid'];
    $work_profile->work_profile_subtitle = $data["work_profile_subtitle"];
    $work_profile->work_profile_title = $data["work_profile_title"];
    $work_profile->work_profile_button_text = $data["work_profile_button_text"];
    $work_profile->work_profile_img = $data["work_profile_img"];
    $work_profile->work_profile_file = $data["work_profile_file"];
    $work_profile->work_profile_datetime = date("Y-m-d H:i:s");

    $work_profile_file_old = $data["work_profile_file_old"];
    $work_profile_img_old = $data["work_profile_img_old"];

    checkId($work_profile->work_profile_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_profile->work_profile_img = checkToUploadGoogleDrive(
      $work_profile->work_profile_img, // FILES
      $work_profile_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_profile->work_profile_img = checkDeleteGoogleDriveApiFiles(
      $work_profile->work_profile_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $work_profile->work_profile_file = checkToUploadGoogleDrive(
      $work_profile->work_profile_file, // FILES
      $work_profile_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $work_profile->work_profile_file = checkDeleteGoogleDriveApiFiles(
      $work_profile->work_profile_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($work_profile);
  }
  if ($workProfileUpdate == "workProfileListUpdate") {
    $work_profile->work_profile_aid = $_GET['work_profileid'];
    $work_profile->work_profile_list_title_a = $data["work_profile_list_title_a"];
    $work_profile->work_profile_list_description_a = $data["work_profile_list_description_a"];
    $work_profile->work_profile_list_title_b = $data["work_profile_list_title_b"];
    $work_profile->work_profile_list_description_b = $data["work_profile_list_description_b"];
    $work_profile->work_profile_list_title_c = $data["work_profile_list_title_c"];
    $work_profile->work_profile_list_description_c = $data["work_profile_list_description_c"];
    $work_profile->work_profile_datetime = date("Y-m-d H:i:s");

    checkId($work_profile->work_profile_aid);
    // update
    $query = checkUpdateCompanyProfileList($work_profile);
  }
  if ($workProfileUpdate == "workProfileUpdateDesc") {
    $work_profile->work_profile_aid = $_GET['work_profileid'];
    $work_profile->work_profile_desc = $data["work_profile_desc"];

    $work_profile->work_profile_datetime = date("Y-m-d H:i:s");

    checkId($work_profile->work_profile_aid);
    // update
    $query = checkUpdateCompanyDescription($work_profile);
  }

  returnSuccess($work_profile, "work profile update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
