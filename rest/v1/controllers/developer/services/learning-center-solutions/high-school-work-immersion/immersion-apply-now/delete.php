<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_apply = new ImmersionApplyNow($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("immersion_applyid", $_GET)) {
  // get data
  checkPayload($data);

  $immersion_apply->immersion_apply_aid = $_GET['home_immersion_applyid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($immersion_apply->immersion_apply_aid);
  $query = checkDelete($immersion_apply);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($immersion_apply, "delete immersion apply now", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
