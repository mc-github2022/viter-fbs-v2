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
  // get data
  $lcss_batch->lcss_batch_aid = $_GET['lcss_batchid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($lcss_batch->lcss_batch_aid);

  $query = checkDelete($lcss_batch);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($lcss_batch, "lcssBatch", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
