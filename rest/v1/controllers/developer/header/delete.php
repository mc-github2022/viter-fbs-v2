<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$header = new Header($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("headerid", $_GET)) {
  // get data
  checkPayload($data);

  $header->header_aid = $_GET['headerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($header->header_aid);
  $query = checkDelete($header);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($header, "header", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
