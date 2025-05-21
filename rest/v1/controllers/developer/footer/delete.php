<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$footer = new Footer($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("footerid", $_GET)) {
  // get data
  checkPayload($data);

  $footer->footer_aid = $_GET['footerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($footer->footer_aid);
  $query = checkDelete($footer);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($footer, "footer", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
