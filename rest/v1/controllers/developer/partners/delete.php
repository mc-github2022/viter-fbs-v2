<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partners = new Partners($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("partnersid", $_GET)) {
  // get data
  $partners->partners_aid = $_GET['partnersid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($partners->partners_aid);

  $query = checkDelete($partners);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($partners, "lcssBatch", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
