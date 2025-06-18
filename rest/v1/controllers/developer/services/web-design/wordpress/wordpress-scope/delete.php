<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_scope = new WordpressScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("wordpress_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $wordpress_scope->wordpress_scope_aid = $_GET['wordpress_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($wordpress_scope->wordpress_scope_aid);
  $query = checkDelete($wordpress_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($wordpress_scope, "wordpress banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
