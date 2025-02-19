<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$home_banner = new Banner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("home_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $home_banner->home_banner_aid = $_GET['home_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($home_banner->home_banner_aid);
  $query = checkDelete($home_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($home_banner, "banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
