<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_apply = new ContinuingApplyNow($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("continuing_applyid", $_GET)) {
  // get data
  checkPayload($data);

  $continuing_apply->continuing_apply_aid = $_GET['continuing_applyid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($continuing_apply->continuing_apply_aid);
  $query = checkDelete($continuing_apply);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($continuing_apply, "delete continuing apply now", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
