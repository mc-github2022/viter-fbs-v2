<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_apply = new OjtApplyNow($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("ojt_applyid", $_GET)) {
  // get data
  checkPayload($data);

  $ojt_apply->ojt_apply_aid = $_GET['home_ojt_applyid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($ojt_apply->ojt_apply_aid);
  $query = checkDelete($ojt_apply);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($ojt_apply, "delete ojt apply now", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
