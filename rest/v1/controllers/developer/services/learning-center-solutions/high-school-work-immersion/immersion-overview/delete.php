<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$immersion_overview = new ImmersionOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("immersion_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $immersion_overview->immersion_overview_aid = $_GET['immersion_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($immersion_overview->immersion_overview_aid);
  $query = checkDelete($immersion_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($immersion_overview, "immersion overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
