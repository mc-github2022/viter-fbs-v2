<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_banner = new AdministrativeBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("administrative_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $administrative_banner->administrative_banner_aid = $_GET['administrative_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($administrative_banner->administrative_banner_aid);
  $query = checkDelete($administrative_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($administrative_banner, "administrative banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
