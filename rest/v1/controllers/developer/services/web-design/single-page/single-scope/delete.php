<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$singlepage_scope = new SinglepageScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("singlepage_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $singlepage_scope->singlepage_scope_aid = $_GET['singlepage_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($singlepage_scope->singlepage_scope_aid);
  $query = checkDelete($singlepage_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($singlepage_scope, "singlepage banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
