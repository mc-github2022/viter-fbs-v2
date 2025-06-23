<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_banner = new WorkBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("work_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $work_banner->work_banner_aid = $_GET['work_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($work_banner->work_banner_aid);
  $query = checkDelete($work_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($work_banner, "work banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
