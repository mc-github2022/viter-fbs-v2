<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_scope = new GraphicScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("graphic_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $graphic_scope->graphic_scope_aid = $_GET['graphic_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($graphic_scope->graphic_scope_aid);
  $query = checkDelete($graphic_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($graphic_scope, "graphic banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
