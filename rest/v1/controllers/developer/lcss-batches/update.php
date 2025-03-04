<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lcss_batch = new LcssBatches($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("lcss_batchid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $lcss_batch->lcss_batch_aid = $_GET['lcss_batchid'];
  $lcss_batch->lcss_batch_name = $data["lcss_batch_name"];
  $lcss_batch->lcss_batch_category = checkIndex($data, "lcss_batch_category");
  $lcss_batch->lcss_batch_school = $data["lcss_batch_school"];
  $lcss_batch->lcss_batch_course = $data["lcss_batch_course"];
  $lcss_batch->lcss_batch_img = $data["lcss_batch_img"];
  $lcss_batch->lcss_batch_datetime = date("Y-m-d H:i:s");

  $lcss_batch_img_old = $data["lcss_batch_img_old"];

  checkId($lcss_batch->lcss_batch_aid);


  //checks current data to avoid same entries from being updated
  $lcss_batch_name_old = $data["lcss_batch_name_old"];
  compareName($lcss_batch, $lcss_batch_name_old, $lcss_batch->lcss_batch_name);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $lcss_batch->lcss_batch_img = checkToUploadGoogleDrive(
    $lcss_batch->lcss_batch_img, // FILES
    $lcss_batch_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $lcss_batch->lcss_batch_img = checkDeleteGoogleDriveApiFiles(
    $lcss_batch->lcss_batch_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );


  // update
  $query = checkUpdate($lcss_batch);
  returnSuccess($lcss_batch, "lcssBatch", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
