<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_banner = new HrisBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("hris_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $hris_banner->hris_banner_aid = $_GET['hris_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($hris_banner->hris_banner_aid);
  $query = checkDelete($hris_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($hris_banner, "hris banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
