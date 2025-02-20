<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$careers = new Careers($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("careersid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $careers->careers_aid = $_GET['careersid'];
  $careers->careers_icon = $data["careers_icon"];
  $careers->careers_job_title = $data["careers_job_title"];
  $careers->careers_job_classification = $data["careers_job_classification"];
  $careers->careers_job_mode = $data["careers_job_mode"];
  $careers->careers_job_status = $data["careers_job_status"];
  $careers->careers_job_description = $data["careers_job_description"];
  $careers->careers_img = $data["careers_img"];
  $careers->careers_job_overview = $data["careers_job_overview"];
  $careers->careers_datetime = date("Y-m-d H:i:s");

  $careers_img_old = $data["careers_img_old"];

  checkId($careers->careers_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $careers->careers_img = checkToUploadGoogleDrive(
    $careers->careers_img, // FILES
    $careers_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $careers->careers_img = checkDeleteGoogleDriveApiFiles(
    $careers->careers_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );


  // update
  $query = checkUpdate($careers);
  returnSuccess($careers, "careers", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
