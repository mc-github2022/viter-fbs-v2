<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$website_scope = new WebsiteScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("website_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $website_scope->website_scope_aid = $_GET['website_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($website_scope->website_scope_aid);
  $query = checkDelete($website_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($website_scope, "website banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
