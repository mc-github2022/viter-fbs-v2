<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_scope = new SocialMediaScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("social_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $social_scope->social_scope_aid = $_GET['social_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($social_scope->social_scope_aid);
  $query = checkDelete($social_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($social_scope, "social banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
