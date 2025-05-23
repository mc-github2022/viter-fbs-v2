<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enrollment_scope = new EnrollmentScope($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("enrollment_scopeid", $_GET)) {
  // get data
  checkPayload($data);

  $enrollment_scope->enrollment_scope_aid = $_GET['enrollment_scopeid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($enrollment_scope->enrollment_scope_aid);
  $query = checkDelete($enrollment_scope);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($enrollment_scope, "enrollment banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
