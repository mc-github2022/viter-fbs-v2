<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new Form($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("formid", $_GET)) {
  // get data
  checkPayload($data);

  $val->form_aid = $_GET['formid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($val->form_aid);
  $query = checkDelete($val);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($val, "form", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
