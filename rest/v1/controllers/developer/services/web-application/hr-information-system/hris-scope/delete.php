<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_scope = new HrisScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("hris_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $hris_scope->hris_scope_aid = $_GET['hris_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($hris_scope->hris_scope_aid);
  $query = checkDelete($hris_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($hris_scope, "hris banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
