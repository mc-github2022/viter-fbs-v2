<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_banner = new ImmersionBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("immersion_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $immersion_banner->immersion_banner_aid = $_GET['immersion_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($immersion_banner->immersion_banner_aid);
  $query = checkDelete($immersion_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($immersion_banner, "immersion banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
