<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_overview = new AdministrativeOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("administrative_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $administrative_overview->administrative_overview_aid = $_GET['administrative_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($administrative_overview->administrative_overview_aid);
  $query = checkDelete($administrative_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($administrative_overview, "administrative overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
