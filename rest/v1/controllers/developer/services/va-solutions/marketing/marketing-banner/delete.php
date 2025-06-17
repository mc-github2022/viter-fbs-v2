<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_banner = new MarketingBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("marketing_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $marketing_banner->marketing_banner_aid = $_GET['marketing_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($marketing_banner->marketing_banner_aid);
  $query = checkDelete($marketing_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($marketing_banner, "marketing banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
