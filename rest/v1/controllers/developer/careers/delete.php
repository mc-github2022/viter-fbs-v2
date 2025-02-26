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
  // get data
  $careers->careers_aid = $_GET['careersid'];
  $filesToDelete = $data['filesToDelete'];
  checkId($careers->careers_aid);

  $query = checkDelete($careers);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($careers, "careers", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
