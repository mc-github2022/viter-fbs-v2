<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$registration_banner = new RegistrationBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("registration_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $registration_banner->registration_banner_aid = $_GET['registration_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($registration_banner->registration_banner_aid);
  $query = checkDelete($registration_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($registration_banner, "registration banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
