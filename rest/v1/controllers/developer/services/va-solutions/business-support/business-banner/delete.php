<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_banner = new BusinessBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("business_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $business_banner->business_banner_aid = $_GET['business_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($business_banner->business_banner_aid);
  $query = checkDelete($business_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($business_banner, "business banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
