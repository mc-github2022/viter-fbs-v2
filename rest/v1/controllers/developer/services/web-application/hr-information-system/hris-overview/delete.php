<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$hris_overview = new HrisOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("hris_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $hris_overview->hris_overview_aid = $_GET['hris_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($hris_overview->hris_overview_aid);
  $query = checkDelete($hris_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($hris_overview, "hris overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
